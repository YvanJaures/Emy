import React from "react";
import Image from "next/image";
import AppLink from "../atoms/AppLink";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

type FooterLink = { label: string; href: string };

const aboutLinks: FooterLink[] = [
  { label: "EMY & CO", href: "/about" },
  { label: "HISTOIRE DE EMY", href: "/about#history" },
  { label: "COMMANDITAIRES", href: "/commanditaires" },
  { label: "HISTORIQUE DE TOURNOI", href: "/tournois" },
  { label: "CRÉER UN COMPTE", href: "/signup" },
  { label: "DEVENIR COMMANDITAIRE", href: "/commanditaires#devenir-commanditaire" },
  { label: "CRÉER UNE COMMUNAUTÉ", href: "/communautes" },
];

const privacyLinks: FooterLink[] = [
  { label: "POLITIQUE DE SÉCURITÉ", href: "/security-policy" },
  { label: "TERMES ET CONDITIONS", href: "/terms" },
];

/**
 * Composant qui permet d'afficher le footer
 */
export default function Footer() {
  return (
    <footer className="bg-[#0b78b9] dark:bg-gray-800 text-white dark:text-gray-100 w-full ">
      <div className="mx-auto flex w-full flex-col gap-10 px-6 py-10 max-sm:flex-col-reverse md:flex-row md:items-start md:justify-between">
        {/* Logo */}
        <div className="flex items-center md:w-[220px] max-sm:w-[100%] max-sm:justify-center">
          <div className="relative h-[200px] w-[340px]">
            <Image
              src="/assets/logos/emy_foot.png"
              alt="EMY"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Colonnes */}
        <div className="grid flex-1 grid-cols-1 gap-8 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {/* A PROPOS */}
          <div>
            <h3 className="mb-4 text-sm underline font-semibold tracking-widest">
              A PROPOS
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((l) => (
                <li key={l.href}>
                  <AppLink
                    href={l.href}
                    className="text-xs text-white/90 hover:text-white hover:underline"
                  >
                    {l.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONFIDENTIALITE */}
          <div>
            <h3 className="mb-4 text-sm underline font-semibold tracking-widest">
              CONFIDENTIALITE
            </h3>
            <ul className="space-y-2">
              {privacyLinks.map((l) => (
                <li key={l.href}>
                  <AppLink
                    href={l.href}
                    className="text-xs text-white/90 hover:text-white hover:underline"
                  >
                    {l.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-sm font-semibold underline tracking-widest">
              CONTACT
            </h3>
            <div className="space-y-2 text-xs text-white/90">
              <p>
                <span className="font-semibold">PHONE :</span>{" "}
                <AppLink
                  href="tel:+14168372145"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  +1 416 837 21 45
                </AppLink>
              </p>

              <p>
                <span className="font-semibold">GMAIL :</span>{" "}
                <AppLink
                  href="mailto:noreplyemyco@gmail.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  noreplyemyco@gmail.com
                </AppLink>
              </p>
            </div>
          </div>

          {/* M. SOCIAUX */}
          <div>
            <h3 className="mb-4 text-sm underline font-semibold tracking-widest">
              M. SOCIAUX
            </h3>

            <ul className="space-y-3 text-xs text-white/90">
              <li className="flex items-center gap-3">
                <FaFacebookF className="h-4 w-4" />
                <AppLink
                  href="https://facebook.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  FACEBOOK
                </AppLink>
              </li>

              <li className="flex items-center gap-3">
                <FaTiktok className="h-4 w-4" />
                <AppLink
                  href="https://tiktok.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  TIKTOK
                </AppLink>
              </li>

              <li className="flex items-center gap-3">
                <FaInstagram className="h-4 w-4" />
                <AppLink
                  href="https://instagram.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  INSTAGRAM
                </AppLink>
              </li>

              <li className="flex items-center gap-3">
                <FaYoutube className="h-4 w-4" />
                <AppLink
                  href="https://youtube.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  YOUTUBE
                </AppLink>
              </li>

              <li className="flex items-center gap-3">
                <FaXTwitter className="h-4 w-4" />
                <AppLink
                  href="https://x.com"
                  className="text-xs text-white/90 hover:text-white hover:underline"
                >
                  X
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white/20">
        <p className="py-4 text-center text-xs text-white/80">
          © 2026 All rights reserved to Emy &amp; Co
        </p>
      </div>
    </footer>
  );
}
