"use client";

import SignupForm from "@/components/organisms/SignupForm";
import MetaData from "@/components/organisms/MetaData";
import {  useConnexion } from "@/hooks/useAuth";

export default function RegisterPage() {
  const {member,loading}=useConnexion();
  const route='/communautes'
  if(member) location.href=route
  return (
    <>
      <MetaData
        seoTitle="Sign up"
        seoDescription="page de création de compte"
      />

      <main
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/arrieres_plan/DesertBloomArizona.png)",
        }}
      >
        <div className="min-h-screen w-full flex items-center justify-center bg-black/10 p-6">
          <section className="relative w-[360px] max-w-[92vw] rounded-xl border border-white/40 bg-white/35 shadow-2xl backdrop-blur-md">
            <div className="h-12 w-full rounded-t-xl bg-white/10" />

            <button
              type="button"
              aria-label="Close"
              className="absolute left-4 top-4 text-[40px] leading-none text-black/70 hover:cursor-pointer hover:text-black"
              onClick={() => history.back()}
            >
              ×
            </button>

            <div className="px-10 pb-10 pt-2">
              <SignupForm />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
