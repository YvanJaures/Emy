"use client";

import React, { useState } from "react";

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
  onChange,
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
        onChange={(e) => {
          onChange?.(e); 
        }}
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