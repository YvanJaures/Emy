"use client";

import { getCommunities,getPublicTournaments } from "@/fetchs/global";
import { CommunityDTO, TournamentDTO } from "@/hooks/Type_DTO";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useEffect, useState } from "react";
import { GetRedisCache, SetRedisCache } from "@/fetchs/redisCache";
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
    const [zoom, setZoom] = useState(7);
    const [filter, setFilter] = useState<"all" | "community" | "golf">("all");
    const [selected, setSelected] = useState<any>(null);
    const [locations,setLocations]=useState<Location[] | null>(null)
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
        const locations:Location[]=[]
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
        setLocations(locations)
    })()
  },[])
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
        <div className="flex gap-2 mb-4">
          {["all", "community", "golf"].map(f => (
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
        </div>

        {/* Map */}
        <Map
          height={450}
          boxClassname="bg-white dark:bg-black"
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
          provider={darkProvider}
        >
          {
            locations?.map((l,index) => (
              <Marker
                key={index}
                anchor={[l.lat, l.lng]}
                color={l.type==="community"? "blue" : "green"}
                onClick={() => setSelected(l)}
                className={(filter==="community"||filter==="all") && l.type==="community"? "" : "hidden"}
              />
            ))
          }
          {/* Communities
          {(filter === "all" || filter === "community") &&
            communities.map((c) => (
              <Marker
                key={c.name}
                anchor={[c.lat, c.lng]}
                color="blue"
                onClick={() => setSelected({ ...c, type: "community" })}
              />
            ))}
 */}
          {/* Golf 
          {(filter === "all" || filter === "golf") &&
            golfCourses.map((g) => (
              <Marker
                key={g.name}
                anchor={[g.lat, g.lng]}
                color="green"
                onClick={() => setSelected({ ...g, type: "golf" })}
              />
            ))}
*/}
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
      </div>
    </div>
  );
}