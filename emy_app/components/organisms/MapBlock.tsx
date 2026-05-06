"use client";

import { geoCode, geoCodeReverse, getCommunities,getPublicTournaments } from "@/fetchs/global";
import { CommunityDTO, geocodeReverse, Position,Location,geoCodeData, TournamentDTO } from "@/hooks/Type_DTO";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetRedisCache, SetRedisCache } from "@/fetchs/redisCache";


export default function MapSection() {
    const [center, setCenter] = useState<[number, number]>([44.2, -77.5]);
    const [zoom, setZoom] = useState(10);
    const [filter, setFilter] = useState<string>("Tous");
    const [selected, setSelected] = useState<Location|null>(null);
    const [locations,setLocations]=useState<Location[] | null>(null)
    const [myLocation,setMyLocation]=useState<Location| null>(null)
    const [loading,setLoading]=useState(false)
    const [dark,setDark]=useState(false)
    const router=useRouter();
    const darkProvider = (x: number, y: number, z: number) =>
      `https://basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
    const handleSearch = (query: string) => {
        const q = query.toLowerCase();
        const g = locations?.find(g =>
          g.name.toLowerCase().includes(q) ||
          g.displayName?.toLowerCase().includes(q)
        );
        if (g) setCenter([g.lat, g.lon]);
    };
    useEffect(()=>{
      (async()=>{
            await setLoading(true);
            const communitiesFetch=await getCommunities();
            const tournamentsFetch=await getPublicTournaments();
            const locations:Location[]=[]
            for (const c of communitiesFetch || []) {
                const result=await geoCode(c.location?? '')
                if(!result || result.length===0) continue
                const geo:geoCodeData=result[0]
                const loc:Location={
                    name:c.name?? 'nom inconnu',
                    members:c.members ?? 0,
                    lat:geo.lat,
                    lon:geo.lon,
                    link:"/communautes/"+c.id_community,
                    type:"community",
                    displayName:geo.displayName,
                    city:geo.city,
                    country:geo.country
                }
                locations.push(loc)
            }
            for (const t of tournamentsFetch || []) {
                const result=await geoCode(t.location?? '')
                if(!result) continue
                const geo:geoCodeData=result[0]
                const loc:Location={
                    name:t.name?? 'nom inconnu',
                    members:t.Player?.length ?? 0,
                    lat:geo.lat,
                    lon:geo.lon,
                    link:"/communautes/"+t.id_community,
                    type:"tournament",
                    displayName:geo.displayName,
                    city:geo.city,
                    country:geo.country
                }
                locations.push(loc)
            }
            setLocations(locations)
            await handleGetLocation()
            setLoading(false);
        })()
    },[])
    useEffect(()=>{
            if (typeof window === 'undefined') return;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // set initial
        setDark(mediaQuery.matches);

        // listener
        const handler = (e: MediaQueryListEvent) => {
        setDark(e.matches);
        };

        mediaQuery.addEventListener('change', handler);
        return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    },[])
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }) as Promise<Position>;
        };
    const handleGetLocation = async () => {
        setLoading(true)
        try {
        const position:Position = await getLocation();
        const position2:geocodeReverse=await geoCodeReverse(position.coords.latitude,position.coords.longitude)
        const myLoc = {
            name: "Ma position",
            displayName:position2.displayName,
            address: position2.address,
            lat: position2.lat,
            lon: position2.lon,
            link: "",
            type: "myLocation"
        };
        setMyLocation(myLoc);
        setCenter([position.coords.latitude, position.coords.longitude]);
        setZoom(12);
        } catch (err) {
        console.log(err);
        }
        setLoading(false)
    }
    const handleViewLocation=(location:Location|null)=>{
        if(!location) return
        setCenter([location.lat,location.lon])
        setZoom(18)
        setSelected(location)
    }
    const getMediaQuery = () => {
        const m = window.matchMedia('(prefers-color-scheme: dark)');
        return m
    }
  return (
    <div className="w-full h-screen">
      <div className={`${loading?'bg-black/10':''} w-full h-screen`}>

        {/*<h2 className="text-xl font-semibold mb-2">CARTE DES TERRAINS</h2>*/}

        {/* Search */}
        <input
          placeholder="Rechercher..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value);
          }}
          className={"w-[95%] left-[2.5%] border border-white/10  h-10 absolute px-2 rounded-xl shadow-xl top-7 z-40 bg-transparent text-black/90 backdrop-blur outline-none dark:text-white"}
        />

        {/* Map */}
        <Map
          boxClassname={`${loading?'pointer-events-none':''} bg-[#aad3df] dark:bg-[#262626]`}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
          provider={dark? darkProvider:undefined}
        >
          {
            locations?.map((l,index) => (
              <Marker
                key={index}
                anchor={[l.lat, l.lon]}
                color={l.type==="community"? "blue" : "green"}
                onClick={() => handleViewLocation(l)}
                className={filter==="Tous" ? "" : filter==="Communautes" && l.type==="community" ? "" : filter==="Tournois" && l.type==="tournament" ? "" : "hidden"}
              />
            ))
          }
            <Marker
                anchor={[myLocation?.lat ?? 0, myLocation?.lon ?? 0]}
                color={"yellow"}
                onClick={() => handleViewLocation(myLocation)}
                className={""}
            />
          {/* Popup (Overlay) */}
          {selected && (
            <Overlay anchor={[selected.lat, selected.lon]}>
              <div
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  minWidth: "150px",
                }}
                className="flex flex-col gap-1 justify-start items-start bg-white dark:bg-black dark:text-white"
              >
                <strong>{selected.name}</strong>

                {selected.type === "community" && (
                  <p>{selected.members} membres</p>
                )}
                <p>{selected.displayName}</p>
                <a href={selected.link} className="text-blue-500 text-sm hover:underline">
                  En savoir plus
                </a>
                <button
                  onClick={() =>{ setSelected(null);setZoom(4)}}
                  style={{
                    marginTop: "5px",
                    fontSize: "12px",
                    color: "blue",
                  }}
                  className="hover:cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </Overlay>
          )}

        </Map>
        {loading && 
          <div className="w-full h-full bg-black/20 pointer-events-none absolute top-0 flex justify-center items-center gap-2 text-white font-semibold">
              <div className="rounded-full animate-spin bg-white w-5 h-7">
              </div>
              Chargement...
          </div>
        }
        {/* Filters */}
        <div className="flex gap-2 absolute bottom-0 z-40 bg-transparent backdrop-blur shadow-xl w-full flex justify-evenly items-center py-3 mb-0">
          {["Tous", "Communautes", "Tournois"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-3 py-1 rounded hover:cursor-pointer shadow-sm dark:text-white ${
                filter === f ? "bg-blue-500 text-white" : ""
              }`}
            >
              {f}
            </button>
          ))}
            <button
              onClick={() => router.back()}
              className={`px-3 py-1 rounded hover:cursor-pointer shadow-sm dark:text-white`}
            >   
                Retour
            </button>
        </div>
      </div>
    </div>
  );
}