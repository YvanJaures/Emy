"use client";

import React, { useEffect, useRef, useState } from "react";

type AvatarPickerProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[11px] text-red-600">{message}</p>;
}

export default function AvatarPicker({
  value,
  error,
  onChange,
}: AvatarPickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const avatars = [
    { label: "Avatar 1", value: "assets/avatars/avatar_prof_1.png" },
    { label: "Avatar 2", value: "assets/avatars/avatar_prof_2.png" },
    { label: "Avatar 3", value: "assets/avatars/avatar_prof_3.png" },
    { label: "Avatar 4", value: "assets/avatars/avatar_prof_4.png" },
    { label: "Avatar 5", value: "assets/avatars/avatar_prof_5.png" },
    { label: "Avatar 6", value: "assets/avatars/avatar_prof_6.png" },
    { label: "Avatar 7", value: "assets/avatars/avatar_prof_7.png" },
    { label: "Avatar 8", value: "assets/avatars/avatar_prof_8.png" },
    { label: "Avatar 9", value: "assets/avatars/avatar_prof_9.png" },
    { label: "Avatar 10",value: "assets/avatars/avatar_prof_10.png" },
    { label: "Avatar 11",value: "assets/avatars/avatar_prof_11.png" },
    { label: "Avatar 12",value: "assets/avatars/avatar_prof_12.png" },
    { label: "Avatar 13",value: "assets/avatars/avatar_prof_13.png" },
    { label: "Avatar 14",value: "assets/avatars/avatar_prof_14.png" },
    { label: "Avatar 15",value: "assets/avatars/avatar_prof_15.png" },
    { label: "Avatar 16",value: "assets/avatars/avatar_prof_16.png" },
    { label: "Avatar 17",value: "assets/avatars/avatar_prof_17.png" },
    { label: "Avatar 18",value: "assets/avatars/avatar_prof_18.png" },
  ];

  const selectedAvatar =
    avatars.find((avatar) => avatar.value === value) ?? null;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(avatarValue: string) {
    onChange(avatarValue);
    setOpen(false);
  }

  return (
    <div className="relative my-2" ref={containerRef}>
      <label className="mb-2 block text-xs text-black">
        Choisissez un avatar
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-xs ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <span className="flex items-center gap-2">
          {selectedAvatar ? (
            <>
              <img
                src={`/${selectedAvatar.value}`}
                alt={selectedAvatar.label}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span>{selectedAvatar.label}</span>
            </>
          ) : (
            <span className="text-gray-500">Sélectionnez un avatar</span>
          )}
        </span>

        <span className="text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
          {avatars.map((avatar) => {
            const isSelected = value === avatar.value;

            return (
              <button
                key={avatar.value}
                type="button"
                onClick={() => handleSelect(avatar.value)}
                className={`flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 ${
                  isSelected ? "bg-blue-50" : ""
                }`}
              >
                <img
                  src={`/${avatar.value}`}
                  alt={avatar.label}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-xs text-black">{avatar.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <FieldError message={error} />
    </div>
  );
}