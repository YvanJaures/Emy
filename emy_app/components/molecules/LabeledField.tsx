"use client";

import React from "react";
import InputText from "../atoms/InputText";

/**
 * Composant qui permet d'avoir en meme temps un label et un input
 */
type Props = {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function LabeledField({
  label,
  containerClassName,
  inputClassName,
  ...props
}: Props) {
  return (
    <InputText
      label={label}
      containerClassName={containerClassName}
      inputClassName={inputClassName}
      {...props}
    />
  );
}

export default LabeledField;

