"use client";

import React, { useState } from "react";

import Title from "../atoms/Title";
import FormError from "../atoms/FormError";
import Button from "../atoms/Button";
import LabeledField from "../molecules/LabeledField";

/**
 * Ce composant est un formulaire de connexion qui n'active le boutton de
 * soumission que lorqsqu'au moins l'email et le mot de passe sont remplis
 */
export default function ResetPForm(props:{route:string,user_name:string}) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [_loading, setLoading] = useState(false);

  // Désactive LOG IN seulement si email OU password est vide
  let canSubmit = newPassword.trim() !== "" && password.trim() !== "";
  const onConfirm=(newPassword:string)=>{
    setError('')
    if(password.trim()!==newPassword.trim()){
        setError("les mots de passe ne correspondent pas!")
        return false
    }
    setError('')
    return true
  }
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Veuillez saisir votre mot de passe.");
      return;
    }
    setLoading(true);

    try {
      const payload = {
        user_name: props.user_name.trim(),
        password: newPassword.trim()
      };

      // MON API
      console.log(payload)
      const res = await fetch(`/api/member/password`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!res.ok) {
        let msg = "Une erreur est survenu, Réesayer plus tard!";
        try {
          const data = await res.json();
          console.log(data)
          if (data?.message) msg = data.message;
        } catch {}
        setError(msg);
        return;
      }

      // Succès
      setError("");
      if(props.route){

        location.href=props.route 
      }else{
        location.href='/profilAdmin'
      }
      //setError("email/username or password incorrect...");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center">
      <Title as="p" className="mb-3 text-xs">
        RESET PASSWORD
      </Title>

      <div className="w-[220px]">
        {/* email / username */}
        <LabeledField
          placeholder="new password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputClassName="py-2 text-xs rounded-lg"
          containerClassName="my-2"
        />

        {/* password */}
        <LabeledField
          placeholder="confirm new password"
          type="password"
          value={newPassword}
          onChange={(e) => {setNewPassword(e.target.value);onConfirm(e.target.value)}}
          inputClassName="py-2 text-xs rounded-lg"
          containerClassName="my-2"
        />
        <div className="my-2">
          <FormError message={error} />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3">
          <Button
            type="submit"
            title="RESET"
            disabled={!canSubmit || _loading}
            size="text-[10px]"
            className="py-2 w-full"
            color="bg-black/80 border-black/80 text-white hover:bg-black/90 disabled:cursor-not-allowed"
          />

          <Button
            type="button"
            title="CANCEL"
            disabled={false}
            size="text-[10px]"
            className="py-2 w-full"
            color="bg-white/80 border-white/80 text-black hover:bg-white"
            onClick={() => location.href='/profil'}
          />
        </div>
      </div>
    </form>
  );
}
