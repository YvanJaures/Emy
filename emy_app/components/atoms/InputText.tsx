"use client";

import React, { useState } from "react";

type InputProps = {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = ({
  label,
  type,
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
        <p className="mb-3 font-bold text-sm text-neutral-700 dark:text-gray-300">
          {label}
        </p>
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
          "w-full rounded-2xl border px-4 py-2 text-sm outline-none shadow-inner",

          //Light mode
          "bg-white/80 text-black placeholder:text-gray-400 border-black/50",

          //Dark mode
          "dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-gray-700",

          //Focus state
          isFocused
            ? "border-yellow-400 dark:border-yellow-400"
            : "",

          inputClassName,
        ].join(" ")}
        type={type}
      />
    </div>
  );
};

export default InputText;