"use client";

import React from "react";
import InputText from "../atoms/IntputText";

/**
 * Composant qui permet d'avoir en meme temps un label et un input
 */
type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function LabeledField({ label, ...props }: Props) {
  return <InputText label={label} {...props} />;
}

export default LabeledField;
