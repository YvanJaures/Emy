"use client";

import React from "react";

export type Admin = {
  id: string;
  name: string;
  tournoi: string;
  email: string;
};

type Props = {
  admin: Admin;
  onDelete: (id: string) => void;
};

export default function AdminRow({ admin, onDelete }: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-5 py-3 shadow sm:grid-cols-4 sm:items-center">
      <p className="text-xs text-black/80">{admin.name}</p>
      <p className="text-xs text-black/60 sm:text-center">{admin.tournoi}</p>
      <p className="text-xs text-black/60 sm:text-center">{admin.email}</p>

      <div className="flex justify-start sm:justify-end">
        <button
          type="button"
          onClick={() => onDelete(admin.id)}
          className="text-xs text-red-500 hover:underline underline-offset-4"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
