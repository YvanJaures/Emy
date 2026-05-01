"use client";

import React from "react";

/**
 * Ce bouton peut contenir un titre, une icône ou les deux.
 * on peut lui ajouter du style selon nos besoins
 */
type ButtonProps = {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;  
  color?: string; 
  title?: string;
  containerClassName?: string;

  /** optionnel  */
  className?: string; 
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  title,
  icon,
  onClick,
  containerClassName = "",
  className = "",
  type = "button",
  // par defaut (si tu ne fournis rien)
  size = "text-[10px]",
  color = "bg-black/80 border-black/80 text-white hover:bg-black/90",
}) => {
  return (
    <div className={containerClassName}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={[
          "rounded-md border-4 px-4 py-2 shadow",
          "flex items-center justify-center gap-2 hover:cursor-pointer",
          "active:scale-[0.99] transition dark:bg-gray-900 dark:text-gray-300 dark:hover:text-[#0F70AC]",
          disabled ? "opacity-60 cursor-not-allowed" : "",
          color,
          className,
        ].join(" ")}
      >
        {title && <span className={`font-bold ${size}`}>{title}</span>}
        {icon}
      </button>
    </div>
  );
};

export default Button;