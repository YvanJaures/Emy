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
    <header className="bg-white">
      <div className="mx-auto flex h-[72px] gap-70 w-full items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-[82px] w-[300px]">
            <Image
              src="/assets/logos/emy_foot.png"
              alt="EMY"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Menu centré (Desktop) */}
        <nav className="hidden lg:flex items-center gap-34">
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
        <div className="flex items-center gap-2">
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
