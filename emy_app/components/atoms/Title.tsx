import React from "react";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
};

function Title({ children, as = "h2", className = "" }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = as as any;

  return (
    <Comp
      className={[
        "text-center font-semibold tracking-widest  dark:text-gray-300",
        className,
      ].join(" ")}
    >
      {children}
    </Comp>
  );
}

export default Title;
