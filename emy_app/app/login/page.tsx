"use client";
import LoginForm from "@/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/assets/Desert%20Bloom.png)" }}
    >
      {/* Overlay léger (aide à lire la carte) */}
      <div className="min-h-screen w-full bg-black/10 flex items-center justify-center p-6">
        {/* Card / Modal */}
        <section className="relative w-[360px] max-w-[92vw] rounded-xl bg-white/35 backdrop-blur-md border border-white/40 shadow-2xl">
          {/* Petit effet “header” doux comme sur l’image */}
          <div className="h-12 w-full rounded-t-xl bg-white/10" />

          {/* Bouton X */}
          <button
            type="button"
            aria-label="Close"
            className="absolute left-4 top-4 text-black/70 hover:text-black text-xl leading-none"
            onClick={() => history.back()}
          >
            ×
          </button>

          {/* Contenu */}
          <div className="px-10 pb-10 pt-2">
            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
}
