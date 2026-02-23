"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button title="GO TO LOGIN" onClick={() => router.push("/login")} />
    </div>
  );
}
