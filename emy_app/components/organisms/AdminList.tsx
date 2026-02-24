"use client";

import React from "react";
import AdminRow, { Admin } from "../molecules/AdminRow";

type Props = {
  admins: Admin[];
  onDelete: (id: string) => void;
};

export default function AdminList({ admins, onDelete }: Props) {
  return (
    <div className="mt-6 space-y-3">
      {admins.map((a) => (
        <AdminRow key={a.id} admin={a} onDelete={onDelete} />
      ))}
    </div>
  );
}