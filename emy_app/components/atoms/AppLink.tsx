import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function AppLink({ href, children, className = "",onClick }: Props) {
  return (
    <Link
      href={href}
      className={["text-xs text-blue-700 hover:underline", className].join(" ")}
    >
      {children}
    </Link>
  );
}
