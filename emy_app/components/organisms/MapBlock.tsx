"use client";

import { getCommunities,getPublicTournaments } from "@/fetchs/global";
import { CommunityDTO, TournamentDTO } from "@/hooks/Type_DTO";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetRedisCache, SetRedisCache } from "@/fetchs/redisCache";
type Position = {
  coords: {
    latitude: number,
    longitude: number,
    altitude: number | null,
    accuracy: number,
    altitudeAccuracy: number | null,
    heading: number | null,
    speed: number | null
  },
  timestamp: number
}
export type Location = {
    name: string | 'nom inconnu';
    address:string| 'adresse inconnue';
    members?: number | 'inconnu';
    lat: number;
    lng: number;
    link:string;
    type:string;
}
type geocodeResult = {
    lat:number,
    lng:number
}
export async function geocodeAddress(address: string) {
    const cached:geocodeResult=await GetRedisCache(address)
    if(cached) return cached
    let coord:geocodeResult = {
        lat: 0,
        lng: 0,
    }
    setTimeout(async() => {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );
        
            const data = await res.json();
        
            if (!data || data.length === 0) return {lat:0,lng:0} as geocodeResult;
        
            coord = {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
            }
            await SetRedisCache(address,coord)
            return coord

    }, 1002); // pour éviter de faire trop de requetes en même temps
    return coord
}
export default function MapSection() {
    const [center, setCenter] = useState<[number, number]>([44.2, -77.5]);
    const [zoom, setZoom] = useState(10);
    const [filter, setFilter] = useState<string>("Tous");
    const [selected, setSelected] = useState<any>(null);
    const [locations,setLocations]=useState<Location[] | null>(null)
    const [myLocation,setMyLocation]=useState<Location| null>(null)
    const [dark,setDark]=useState(false)
    const router=useRouter();
    const darkProvider = (x: number, y: number, z: number) =>
      `https://basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
    const handleSearch = (query: string) => {
        const q = query.toLowerCase();
        const g = locations?.find(g =>
          g.name.toLowerCase().includes(q) ||
          g.address.toLowerCase().includes(q)
        );
        if (g) setCenter([g.lat, g.lng]);
    };
    useEffect(()=>{
        (async()=>{
            const communitiesFetch=await getCommunities();
            const tournamentsFetch=await getPublicTournaments();
            const locations:Location[]=[
                {
                    name: "Ottawa",
                    address: "Ottawa, ON, Canada",
                    members: 100,
                    lat: 45.4215,
                    lng: -75.6972,
                    link: "",
                    type: "tournament"
                },
                {
                    name: "Toronto",
                    address: "Toronto, ON, Canada",
                    members: 200,
                    lat: 43.6532,
                    lng: -79.3832,
                    link: "",
                    type: "community"
                }
            ]
            /*
            for (const c of communitiesFetch || []) {
                const geo:geocodeResult=await geocodeAddress(c.location?? '')
                const loc={
                    name:c.name?? 'nom inconnu',
                    address:c.location?? 'adresse inconnue',
                    members:c.members ?? 0,
                    lat:geo.lat,
                    lng:geo.lng,
                    link:"/communautes/"+c.id_community,
                    type:"community"
                }
                locations.push(loc)
            }
            for (const t of tournamentsFetch || []) {
                const geo:geocodeResult= await geocodeAddress(t.location?? '')
                const loc={
                    name:t.name?? 'nom inconnu',
                    address:t.location?? 'adresse inconnue',
                    members:t.Player?.length ?? 0,
                    lat:geo.lat,
                    lng:geo.lng,
                    link:"/communautes/tournois/"+t.id_tour,
                    type:"tournament"
                }
                locations.push(loc)
            }
            */
            setLocations(locations)
            handleGetLocation()
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
        try {
        const position:Position = await getLocation();
        const myLoc = {
            name: "Ma position",
            address: "Votre position actuelle",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            link: "",
            type: "myLocation"
        };
        setMyLocation(myLoc);
        setCenter([position.coords.latitude, position.coords.longitude]);
        setZoom(12);
        } catch (err) {
        console.log(err);
        }
    }
    const handleViewLocation=(location:Location|null)=>{
        if(!location) return
        setCenter([location.lat,location.lng])
        setZoom(18)
        setSelected(location)
    }
    const getMediaQuery = () => {
        const m = window.matchMedia('(prefers-color-scheme: dark)');
        return m
    }
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen">

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
          boxClassname="bg-[#aad3df] dark:bg-[#262626]"
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
                anchor={[l.lat, l.lng]}
                color={l.type==="community"? "blue" : "green"}
                onClick={() => handleViewLocation(l)}
                className={filter==="Tous" ? "" : filter==="Communautes" && l.type==="community" ? "" : filter==="Tournois" && l.type==="tournament" ? "" : "hidden"}
              />
            ))
          }
            <Marker
                anchor={[myLocation?.lat ?? 0, myLocation?.lng ?? 0]}
                color={"yellow"}
                onClick={() => handleViewLocation(myLocation)}
                className={""}
            />
          {/* Popup (Overlay) */}
          {selected && (
            <Overlay anchor={[selected.lat, selected.lng]}>
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
                <p>{selected.address}</p>
                <a href={selected.link} className="text-blue-500 text-sm hover:underline">
                  En savoir plus
                </a>
                <button
                  onClick={() => setSelected(null)}
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