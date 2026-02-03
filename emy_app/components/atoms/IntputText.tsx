"use client";

import React, { useState } from "react";

/**
 * Cet input permet à l'utilisateur d'entrer du texte, des nombres ou des symboles. 
 * Vous pouvez également ajouter un nouveau style aux input et au conteneur selon votre utilisation
 *
 * @param {string} label
 * - Spécifiez les informations attendues dans le champ
 */
type InputProps = {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = ({
  label,
  containerClassName = "",
  inputClassName = "",
  onFocus,
  onBlur,
  ...inputProps
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div className={`w-full my-2 ${containerClassName}`}>
      {label && (
        <p className="mb-3 font-bold text-sm text-neutral-700">{label}</p>
      )}

      <input
        {...inputProps}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        className={[
          "w-full rounded-2xl border bg-white/80 px-4 py-2 text-sm outline-none",
          "shadow-inner",
          isFocused ? "border-yellow-400" : "border-black/50",
          inputClassName,
        ].join(" ")}
      />
    </div>
  );
};

export default InputText;
