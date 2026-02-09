"use client";

import React, { useMemo, useState } from "react";

import Title from "../atoms/Title";
import FormError from "../atoms/FormError";
import Button from "../atoms/Button";
import AppLink from "../atoms/AppLink";
import SelectField from "../atoms/SelectField";
import LabeledField from "../molecules/LabeledField";

type Role = "user" | "commanditaire";

export default function LoginForm() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("user");
  const [adminId, setAdminId] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Désactive LOG IN seulement si email OU password est vide
  const canSubmit = useMemo(() => {
    return emailOrUsername.trim() !== "" && password.trim() !== "";
  }, [emailOrUsername, password]);

  console.log("DEBUG:", {
  emailOrUsername,
  password,
  canSubmit
});


  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Veuillez saisir votre email/username et votre mot de passe.");
      return;
    }

    setLoading(true);

    try {
      // Simulation d’erreur (à remplacer par ton API)
      setError("email/username or password incorrect...");
    } finally {
      setLoading(false);
    }
  }
console.log("STATE:", { emailOrUsername, password });
  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center">
      <Title as="p" className="mb-3">
        LOG IN
      </Title>

      <div className="w-[220px]">

        {/* email / username */}
        <LabeledField
          placeholder="email or username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
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

        
        {/* role */}
        <SelectField
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="py-2 text-xs rounded-lg my-2"
        >
          <option value="user">user</option>
          <option value="commanditaire">commanditaire</option>
        </SelectField>

        {/* admin ID (toujours visible comme sur ton image) */}
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

