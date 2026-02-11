"use client";

import React, { useState } from "react";

import Title from "../atoms/Title";
import FormError from "../atoms/FormError";
import Button from "../atoms/Button";
import AppLink from "../atoms/AppLink";
import LabeledField from "../molecules/LabeledField";

/**
 * Ce composant est un formulaire de connexion qui n'active le boutton de
 * soumission que lorqsqu'au moins l'email et le mot de passe sont remplis
 */
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Désactive LOG IN seulement si email OU password est vide
  const canSubmit = email.trim() !== "" && password.trim() !== "";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Veuillez saisir votre email/username et votre mot de passe.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email.trim(),
        password: password.trim(),
        ...(adminId.trim() ? { adminId: adminId.trim() } : {}), // adminId optionnel
      };

      // MON API

      const API_BASE = "http://localhost:3000";

      const res = await fetch(`${API_BASE}/api/connexion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!res.ok) {
        let msg = "email/username or password incorrect...";
        try {
          const data = await res.json();
          if (data?.message) msg = data.message;
        } catch {}
        setError(msg);
        return;
      }

      // Succès
      setError("");
      window.location.href = "/"; 
      //setError("email/username or password incorrect...");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center">
      <Title as="p" className="mb-3">
        LOG IN
      </Title>

      <div className="w-[220px]">
        {/* email / username */}
        <LabeledField
          placeholder="email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputClassName="py-2 text-xs rounded-lg"
          containerClassName="my-2"
        />

        {/* password */}
        <LabeledField
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputClassName="py-2 text-xs rounded-lg"
          containerClassName="my-2"
        />

        {/* petit texte comme sur la capture (optionnel) */}
        <div className="my-1 flex items-center gap-2 text-xs text-black/80">
          <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-black/60" />
          <span>are you an admin?</span>
        </div>

        {/* admin ID (toujours visible) */}
        <LabeledField
          placeholder="ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          inputClassName="py-2 text-xs rounded-lg"
          containerClassName="my-2"
        />

        <div className="my-2">
          <FormError message={error} />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3">
          <Button
            type="submit"
            title="LOG IN"
            disabled={!canSubmit || loading}
            size="text-[10px]"
            className="py-2"
            color="bg-black/80 border-black/80 text-white hover:bg-black/90"
          />

          <Button
            type="button"
            title="SIGN IN"
            disabled={false}
            size="text-[10px]"
            className="py-2"
            color="bg-white/80 border-white/80 text-black hover:bg-white"
            onClick={() => (window.location.href = "/register")}
          />
        </div>

        <div className="mt-3 text-center">
          <AppLink href="/forgot-password" className="text-[11px]">
            forgot password ?
          </AppLink>
        </div>
      </div>
    </form>
  );
}
