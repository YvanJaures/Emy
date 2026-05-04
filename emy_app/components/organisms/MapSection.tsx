"use client";

import { geoCode, getCommunities,getPublicTournaments } from "@/fetchs/global";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type Location = {
    name: string | 'nom inconnu';
    members?: number | 0;
    lat: number;
    lon: number;
    link:string;
    type:string;
    city?:string,
    country?:string,
    displayName?:string,
    address?: {
      street: string,
      houseNumber: string,
      city:string,
      postcode: string,
      country: string,
      countryCode: string
    }
}
type geoCode =   {
    lat: number,
    lon: number,
    displayName: string,
    type: string,
    country: string,
    city: string
  }
type geocodeReverse={
    lat: number,
    lon: number,
    displayName:string,
    address: {
      street: string,
      houseNumber: string,
      city:string,
      postcode: string,
      country: string,
      countryCode: string
    }
}

export default function MapSection() {
    const [center, setCenter] = useState<[number, number]>([44.2, -77.5]);
    const [zoom, setZoom] = useState(7);
    const [filter, setFilter] = useState<string>("Tous");
    const [selected, setSelected] = useState<any>(null);
    const [locations,setLocations]=useState<Location[] | null>(null)
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
            const communitiesFetch=await getCommunities();
            const tournamentsFetch=await getPublicTournaments();
            const locations:Location[]=[]
            for (const c of communitiesFetch || []) {
                const result=await geoCode(c.location?? '')
                if(!result || result.length===0) continue
                const geo:geoCode=result[0]
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
                const geo:geoCode=result[0]
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
  const handleViewLocation=(location:Location|null)=>{
      if(!location) return
        setCenter([location.lat,location.lon])
        setZoom(18)
        setSelected(location)
  }
  return (
    <div className="w-full px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-xl font-semibold mb-2">CARTE DES TERRAINS</h2>

        {/* Search */}
        <input
          placeholder="Rechercher..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value);
          }}
          className="border px-3 py-2 mb-4 w-full"
        />

        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {["Tous", "Communautes", "Tournois"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-3 py-1 rounded hover:cursor-pointer ${
                filter === f ? "bg-blue-500 text-white" : "border"
              }`}
            >
              {f}
            </button>
          ))}            
          <button
              onClick={() => router.push('/carte')}
              className={`px-3 py-1 rounded hover:cursor-pointer border dark:border-white`}
            >
              Voir
            </button>
        </div>

        {/* Map */}
        <Map
          height={450}
          boxClassname="bg-white dark:bg-[#262626]"
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
      </div>
    </div>
  );
}