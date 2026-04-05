"use client";
import { Community_memberDTO } from "@/hooks/Type_DTO";
import { useState } from "react";

type Props = {
  users: Array<Community_memberDTO>;
  className: string;
  onSelectionChange: (selectedUsers: Community_memberDTO[]) => void;
};

export default function UserSelectRow({
  users,
  className,
  onSelectionChange,
}: Props) {
  const [selectedUserNames, setSelectedUserNames] = useState<string[]>([]);
  const [avatar, setAvatar] = useState<string[]>([]);

  function handleToggleUser(user: Community_memberDTO, checked: boolean) {
    let updatedSelection: string[];

    if (checked) {
      updatedSelection = [...selectedUserNames, user.user_name];
    } else {
      updatedSelection = selectedUserNames.filter(
        (userName) => userName !== user.user_name
      );
    }

    setSelectedUserNames(updatedSelection);

    const selectedUsers = users.filter((u) =>
      updatedSelection.includes(u.user_name)
    );

    onSelectionChange(selectedUsers);
  }

  return (
    <ul
      className={`w-full overflow-y-scroll flex flex-col justify-start items-center p-2 gap-2 dark:bg-gray-800 ${className}`}
    >
      {users.map((user, i) => (
        <li
          key={user.user_name ?? i}
          className="flex list-none flex-row w-full justify-center items-center hover:cursor-pointer hover:bg-black/20"
        >
          <span className="flex-10">
            <input
              type="checkbox"
              name="selectedUsers"
              checked={selectedUserNames.includes(user.user_name)}
              onChange={(e) => handleToggleUser(user, e.target.checked)}
            />
          </span>

          <span className="flex-20">
            <img
              src={
                user?.Member.avatar ?? 'bb'
              }
              alt="image de profil"
              className="flex-20 w-[35px] rounded-full"
              onError={() => {
                const updatedAvatars = [...avatar];
                updatedAvatars[i] = "/assets/avatars/avatar_prof_2.png";
                setAvatar(updatedAvatars);
              }}
            />
          </span>

          <p className="flex-70" id={`user_name${i}`}>
            @{user?.user_name}
          </p>
        </li>
      ))}
    </ul>
  );
}