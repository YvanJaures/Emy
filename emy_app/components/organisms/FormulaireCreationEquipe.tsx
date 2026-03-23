"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import PopUp from "../atoms/PopUp";
import Montant from "../molecules/Montant";
import FormulaireEquipe, { FormulaireData } from "@/components/templates/FormulaireEquipe";
import { useConnexion } from "@/hooks/useAuth";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id_tour: number;
};

type FormErrors = Partial<Record<keyof FormulaireData, string>> & {
  general?: string;
};
/** Formulaire de payement pour l'inscription a un tournoi */
export default function FormulaireCreationEquipe({
  isOpen,
  onClose,
  id_tour,
}: Props) {
  const { member, loading } = useConnexion();
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const [amount, setAmount] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormulaireData>({
    user_name: "",
    email: "",
    team_name:"",
    team_key:"",
    payment_method: "",
    card_number: "",
    card_name: "",
    cvv: "",
    expiry_date: "",
    billing_address: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  React.useEffect(() => {
    if (member) {
      setFormData((prev) => ({
        ...prev,
        user_name: member.user_name || "",
        email: member.email || "",
      }));
    }
  }, [member]);

  const handleAmountLoaded = (loadedAmount: number) => {
    setAmount(loadedAmount*3);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Le user_name est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    }
    if (!formData.team_name.trim()) {
      newErrors.team_name = "Le nom est obligatoire";
    }
    if (!formData.team_key.trim()) {
      newErrors.team_key = "La clé est obligatoire";
    }
    if (!formData.payment_method.trim()) {
      newErrors.payment_method = "Le mode de paiement est obligatoire";
    }

    if (!formData.card_number.trim()) {
      newErrors.card_number = "Le numéro de carte est obligatoire";
    } else if (!/^\d{16}$/.test(formData.card_number)) {
      newErrors.card_number = "Le numéro de carte doit contenir 16 chiffres";
    }

    if (!formData.card_name.trim()) {
      newErrors.card_name = "Le nom sur la carte est obligatoire";
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "Le CVV est obligatoire";
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "Le CVV doit contenir 3 chiffres";
    }

    if (!formData.expiry_date) {
      newErrors.expiry_date = "La date d'expiration est obligatoire";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.expiry_date);
      const todayOnly = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );

      if (selectedDate <= todayOnly) {
        newErrors.expiry_date =
          "La date d'expiration doit être supérieure à la date du jour";
      }
    }

    if (!formData.billing_address.trim()) {
      newErrors.billing_address = "L'adresse de facturation est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    if (!member) {
      setErrors({
        general: "Utilisateur non connecté",
      });
      return;
    }

    try {
      setSubmitting(true);
      setErrors({});
      setSuccessMessage("");

      const response = await fetch(`/api/member/team`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name:formData.team_name,
          id_tour:id_tour,
          key_team:formData.team_key,
          user_name: member.user_name,
        }),
      });

      if (!response.ok) {
        setErrors({
          general:"Erreur lors du paiement ou de la création"+(await response.json()).error,
        });
        return;
      }

      setSuccessMessage("Payement effectué avec succès! Création en cours...");

      setTimeout(() => {
        onClose();
        setSuccessMessage("");
      }, 3000);

      // onClose();
      // location.href = "/profil";
    } catch (error) {
      setErrors({
        general: "Une erreur est survenue. Veuillez réessayer."+error,
      });
      console.log(error)
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen || loading) return null;

  return (
    <PopUp onClose={onClose}>
      <div className="w-full p-6">
        <h2 className="mb-6 text-2xl font-bold">Formulaire de création d'équipe</h2>

        <div className="space-y-4">
          <Montant id_tour={id_tour} onAmountLoaded={handleAmountLoaded} />

          <FormulaireEquipe
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />

          {amount > 0 && (
            <p className="text-sm text-gray-600">
              Montant à payer :{amount/3+' * '+'3 = '}
              <span className="font-semibold">{amount} $</span>
            </p>
          )}

          {errors.general && (
            <p className="text-sm text-red-600">{errors.general}</p>
          )}

          {successMessage && (
            <p className="text-sm text-green-600 font-medium">
              {successMessage}
            </p>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border px-4 py-2 hover:cursor-pointer"
            >
              Annuler
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50 hover:cursor-pointer"
            >
              {submitting ? "Paiement..." : "Payer"}
            </button>
          </div>
        </div>
      </div>
    </PopUp>
  );
}
