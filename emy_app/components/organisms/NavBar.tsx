"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaMoon } from "react-icons/fa6";
import AppLink from "../atoms/AppLink";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "ACCUEIL", href: "/" },
  { label: "COMMUNAUTÉS", href: "/communautes" },
  { label: "TOURNOIS", href: "/tournois" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "CONNEXION", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white w-full border-b-[3px] border-[#0b78b9]">
      <div className="flex h-[72px] w-full items-center justify-between">
        {/* Logo */}
          <div className="flex justify-center items-center p-5 h-[50%] w-[20%] max-lg:w-[40%]">
            <img
              src="/assets/logos/emy_head.png"
              alt="EMY"
              className="object-contain w-[80%]"
            />
          </div>

        {/* Menu centré (Desktop) */}
        <nav className="hidden lg:flex items-center justify-evenly w-[70%]">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={[
                  "uppercase text-xs tracking-widest text-black",
                  "hover:underline underline-offset-4",
                  isActive ? "underline" : "opacity-60 hover:opacity-100",
                ].join(" ")}
              >
                {item.label}
              </AppLink>
            );
          })}
        </nav>

        {/* Actions à droite */}
        <div className="flex items-center gap-2 w-[10%] max-lg:w-[20%]">
          <button
            type="button"
            aria-label="Activer/Désactiver le mode sombre"
            className="rounded-full p-2 text-black/80 hover:bg-black/5"
            onClick={() => {
              // TODO: ton toggle dark mode
            }}
          >
            <FaMoon className="h-10 w-5" />
          </button>

          <button
            type="button"
            className="lg:hidden rounded-full p-2 hover:bg-black/5"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1">
              <span className="block h-[2px] w-6 bg-black" />
              <span className="block h-[2px] w-6 bg-black" />
              <span className="block h-[2px] w-6 bg-black" />
            </div>
          </button>
        </div>
      </div>

      <div className="h-[3px] w-full bg-[#0b78b9]" />
      
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.href} onClick={() => setOpen(false)}>
                    <AppLink
                      href={item.href}
                      className={[
                        "uppercase text-xs tracking-widest text-black",
                        "hover:underline underline-offset-4",
                        isActive ? "underline" : "opacity-60 hover:opacity-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </AppLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
