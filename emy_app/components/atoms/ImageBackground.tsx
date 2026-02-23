import React from "react";

type Props = {
  imageUrl: string;
  children: React.ReactNode;
};

export default function ImageBackground({ imageUrl, children }: Props) {
  return (
    <section
      className="relative overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 p-8">{children}</div>
    </section>
  );
}
