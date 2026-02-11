import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function AppLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={["text-xs text-blue-700 hover:underline", className].join(" ")}
    >
      {children}
    </Link>
  );
}
