import React from "react";
import type { AdminDTO } from "@/hooks/Type_AdminDTO"

export default function AdminRow({
  admin,
  onDelete,
}: {
  admin: AdminDTO;
  onDelete: (id_admin: number) => void;
}) {
  //  NOM 
  const nom =
    [admin.Member?.name, admin.Member?.surname].filter(Boolean).join(" ") ||
     admin.user_name;
    // admin.user_name ||
    // `Admin #${admin.id_admin}`;

  // TOURNOI  on prend le 1er tournoi 
  // const firstTour = admin.Tournament?.[0] ?? null;
  // const tournoi =
  //   firstTour?.location?.trim()
  //     ? firstTour.location
  //     : firstTour
  //     ? `Tournoi ${firstTour.id_tour}`
  //     : "—";

  const communaute =
    admin.Community?.name?.trim()
      ? admin.Community.name
      : `Communauté ${admin.id_community}`;

  //  EMAIL 
  const email = admin.Member?.email ?? "—";

  return (
    <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-5 py-3 shadow sm:grid-cols-4 sm:items-center">
      <p className="text-xs text-black/80">{nom}</p>
      <p className="text-xs text-black/60 sm:text-center">{communaute}</p>
      <p className="text-xs text-black/60 sm:text-center">{email}</p>

      <div className="flex justify-start sm:justify-end">
        <button
          type="button"
          onClick={() => onDelete(admin.id_admin)}
          className="text-xs text-red-500 hover:underline underline-offset-4"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}