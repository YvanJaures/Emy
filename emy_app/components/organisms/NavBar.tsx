"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaMoon } from "react-icons/fa6";
import AppLink from "../atoms/AppLink";
import { useConnexion } from "@/hooks/useAuth";
import { GoBell } from "react-icons/go";
import Notifications from "../molecules/Notifications";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

type NavItem = { label: string; href: string };

let navItems: NavItem[] = [
  { label: "ACCUEIL", href: "/" },
  { label: "COMMUNAUTÉS", href: "/communautes" },
  { label: "TOURNOIS", href: "/tournois" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "CONNEXION", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [notif,setNotif]=useState(false);
  const [notifications,setNotifications]=useState<any[]|null>(null)
  const {member,loading}=useConnexion();

  if(member){
    navItems=[
      { label: "COMMUNAUTÉS", href: "/communautes" },
      { label: "TOURNOIS", href: "/tournois" },
      { label: "SPONSORS", href: "/sponsors" },
      { label: "PROFIL", href: "/profil" }, 
    ]
  }

  return (
    <header className="bg-white dark:bg-gray-800 w-full border-b-[3px] border-[#0b78b9] text-gray-900 dark:text-gray-100">

      <div className="flex h-[72px] w-full items-center justify-between">

        {/* Logo */}
        <div className="flex justify-center items-center p-5 h-[50%] w-[20%] max-lg:w-[40%]">
          <img
            src="/assets/logos/emy_head.png"
            alt="EMY"
            className="object-contain w-[80%]"
          />
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center justify-evenly w-[70%]">

          {member && (
            <button
              className={[
                "uppercase text-xs tracking-widest",
                "text-black dark:text-gray-300",
                "hover:underline underline-offset-4 text-blue-700 opacity-60 hover:opacity-100 hover:cursor-pointer"
              ].join(" ")}
            >
              {"RECHERCHER"}
            </button>
          )}

          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={[
                  "uppercase text-xs tracking-widest",
                  "text-black dark:text-gray-300",
                  "hover:underline underline-offset-4",
                  isActive ? "underline" : "opacity-60 hover:opacity-100",
                ].join(" ")}
              >
                {item.label}
              </AppLink>
            );
          })}

        </nav>

        {/* Right actions */}
        <div className="flex items-center flex-20 justify-end gap-2 w-[10%] mr-2 max-lg:w-[20%]">

          {/* Dark mode button */}
          <button
            type="button"
            aria-label="Activer/Désactiver le mode sombre"
            className="rounded-full p-2 text-black/80 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => {
              // TODO toggle
            }}
          >
            <FaMoon className="h-6 w-5" />
          </button>

          {/* Notifications */}
          {member && (
            <span
              className="group hover:cursor-pointer"
              onClick={()=>setNotif(!notif)}
            >
              <GoBell className="h-10 w-5 text-black dark:text-gray-300 group-hover:text-[#0F70AC]" />

              {notifications && (
                <p className="bg-red-500 rounded-full w-4 h-4 text-white text-[8px] text-center flex justify-center items-center absolute -translate-y-8 translate-x-1/2 animate-ping">
                  99+
                </p>
              )}
            </span>
          )}

          {/* Admin icon */}
          {member?.Admin?.id_community && (
            <MdOutlineAdminPanelSettings
              className="h-12 w-6 text-black dark:text-gray-300 hover:text-blue-700 hover:cursor-pointer"
              onClick={()=>location.href="/profilAdmin"}
            />
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1">
              <span className="block h-[2px] w-6 bg-black dark:bg-gray-100" />
              <span className="block h-[2px] w-6 bg-black dark:bg-gray-100" />
              <span className="block h-[2px] w-6 bg-black dark:bg-gray-100" />
            </div>
          </button>

        </div>
      </div>

      <div className="h-[3px] w-full bg-[#0b78b9]" />

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-gray-800">
          <nav className="px-6 py-4">

            {member && (
              <button
                className={[
                  "uppercase text-xs tracking-widest mb-2",
                  "text-black dark:text-gray-300",
                  "hover:underline underline-offset-4 text-blue-700 opacity-60 hover:opacity-100 hover:cursor-pointer"
                ].join(" ")}
              >
                {"RECHERCHER"}
              </button>
            )}

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
                        "uppercase text-xs tracking-widest",
                        "text-black dark:text-gray-300",
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

      {notif && <Notifications notifications={notifications}/>}
    </header>
  );
}