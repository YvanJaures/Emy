"use client";

import { useEffect, useState } from "react";
import LabeledField from "../molecules/LabeledField";

type Props = {
  id_tour: number;
  token?: string;
  onAmountLoaded?: (amount: number) => void;
};

export default function Montant({ id_tour, token, onAmountLoaded }: Props) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFees = async () => {
      try {
        setError("");

        const response = await fetch(
          `/api/member/registration/fees?id_tour=${id_tour}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Erreur lors de la récupération du montant");
        }

        const fee = Number(data.fees ?? 0);
        setAmount(String(fee));
        onAmountLoaded?.(fee);
      } catch (error: any) {
        setError(error.message || "Impossible de récupérer le montant");
      }
    };

    if (id_tour) {
      fetchFees();
    }
  }, [id_tour, token, onAmountLoaded]);

  return (
    <div className="w-full">
      <LabeledField
        label="Montant unitaire"
        value={amount}
        readOnly
        disabled
        className="w-full"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}