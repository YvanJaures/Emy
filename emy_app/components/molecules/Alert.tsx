'use client'
import { useState } from "react"
import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
export default function Alert({
  message,
  error,
  onMes,
}: {
  message: string;
  error: boolean;
  onMes: () => void;
}) {
  const [mes,setMes]=useState(message)
  useEffect(() => {
    if (!mes) return;

    const timer = setTimeout(() => {
      setMes('')
      onMes(); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [mes]);

  if (!mes) return null;

  return (
    <div
      className={`flex absolute justify-between items-center gap-2 fixed top-1 left-1/2 -translate-x-1/2 z-50 p-2 border rounded-md shadow
      ${error ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"}`}
    >
        {error? (<MdOutlineCancel className="text-red-500"/>):(<FaRegCheckCircle className="text-green-500"/>)}
      <p>{mes}</p>
    </div>
  );
}