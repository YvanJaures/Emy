"use client";

import React from "react";
import AdminRow from "../molecules/AdminRow";
import type { AdminDTO } from "@/hooks/Type_DTO"
import NoContent from "../molecules/NoContent";

export default function AdminList({
  admins,
  onDelete,
}: {
  admins: AdminDTO[];
  onDelete: (id_admin: number) => void;
}) {
  return (
    <div className="mt-6 space-y-3">
      {admins.map((a) => (
        <AdminRow key={a.id_admin} admin={a} onDelete={onDelete} />
      ))}
      {!admins || admins.length===0 &&(
        <NoContent/>
      )}
    </div>
  );
}