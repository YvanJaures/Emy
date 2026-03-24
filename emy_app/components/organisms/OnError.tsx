import { useState } from "react";
import Button from "../atoms/Button";
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
      <div className="absolute top-0 left-0 w-dvw h-dvh backdrop-blur-md bg-black/5 z-20"></div>
      <div
        className=
          "bg-white flex absolute fixed flex-col justify-center items-center gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-sm z-99"
      >
        <h2 className="bold text-[30px] text-center bg-gray-200 w-full flex justify-center items-center">
          <p className="text-red-700 text-[50px]">×</p>
          {title}
        </h2>
        <span className="text-xl p-2 text-center text-wrap">{message}</span>
        <span
          className="flex gap-10 bg-gray-200 w-full p-3
                justify-center items-center"
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
