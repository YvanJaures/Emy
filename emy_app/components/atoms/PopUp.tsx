"use client";

import React from "react";

type PopUpProps = {
  children: React.ReactNode;
  onClose: () => void;
};

/**
 * Composant PopUp reutilisable pour afficher un formulaire sur une meme page
 * sans avoir a creer un nouvelle page
 */
export default function PopUp({ children, onClose }: PopUpProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 z-10 text-xl text-red-500 hover:opacity-80"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}