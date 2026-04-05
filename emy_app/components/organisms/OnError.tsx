import { useState } from "react";
import Button from "../atoms/Button";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

type Props = {
  title: string;
  message: string;
  onConfirmed: (conf: boolean) => void;
};
export default function OnError({ title, message, onConfirmed }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const handleCancel = () => {
    setIsVisible(false);
    onConfirmed(false);
  };
  if (!isVisible) return;
  return (
    <>
      <div className="z-145 fixed absolute top-0 left-0 w-dvw h-dvh backdrop-blur-md bg-black/5 z-20 max-sm:h-full"></div>
      <div
        className=
          " z-150 bg-white flex absolute fixed flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-sm dark:bg-gray-800 border border-red-700"
      >
        <h2 className="bold text-2xl text-center bg-red-600/20 w-full flex justify-start p-1 gap-1 items-center">
          <p className="text-red-700 text-md"><MdOutlineReportGmailerrorred /></p>
          {title}
        </h2>
        <span className="text-xl p-2 text-center text-wrap bg-red-600/20">{message}</span>
        <span
          className="flex gap-10 bg-gray-200 w-full p-3
          justify-center items-center bg-red-600/20"
        >
          <Button
            title="Retour"
            className="bg-red-700 border-none"
            onClick={() => handleCancel()}
          />
        </span>
      </div>
    </>
  );
}
