import React from "react";
import Title from "../atoms/Title"; // adapte le chemin

export default function SectionPillTitle({ text }: { text: string }) {
  return (
    <div className="mx-auto w-fit rounded-2xl bg-white px-10 py-3 shadow dark:bg-gray-800">
      <Title
        as="p"
        className="text-xs font-semibold text-black tracking-normal"
      >
        {text}
      </Title>
    </div>
  );
}
