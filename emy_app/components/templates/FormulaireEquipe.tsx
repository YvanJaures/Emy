"use client";

import React from "react";
import LabeledField from "../molecules/LabeledField";

/** Formulaire de payement reutilisable pour s'inscrire et pour creer une equipe */
export type FormulaireData = {
  user_name: string;
  email: string;
  team_name: string;
  team_key: string;
  payment_method: string;
  card_number: string;
  card_name: string;
  cvv: string;
  expiry_date: string;
  billing_address: string;
};

type Props = {
  formData: FormulaireData;
  errors: Partial<Record<keyof FormulaireData, string>>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function Formulaire({ formData, errors, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <LabeledField
          label="user_name"
          name="user_name"
          value={formData.user_name}
          readOnly
          disabled
        />
      </div>

      <div>
        <LabeledField
          label="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
     <div>
        <LabeledField
          label="Nom d'équipe"
          name="team_name"
          type="text"
          value={formData.team_name}
          onChange={onChange}
        />
        {errors.team_name && <p className="mt-1 text-sm text-red-600">{errors.team_name}</p>}
      </div>
      <div>
        <LabeledField
          label="Clé d'accès"
          name="team_key"
          type="text"
          value={formData.team_key}
          onChange={onChange}
        />
        {errors.team_key && <p className="mt-1 text-sm text-red-600">{errors.team_key}</p>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Mode de paiement</label>
        <select
          name="payment_method"
          value={formData.payment_method}
          onChange={onChange}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="">Choisir</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>
        {errors.payment_method && (
          <p className="mt-1 text-sm text-red-600">{errors.payment_method}</p>
        )}
      </div>

      <div>
        <LabeledField
          label="Numéro de carte"
          name="card_number"
          value={formData.card_number}
          onChange={onChange}
          maxLength={16}
        />
        {errors.card_number && (
          <p className="mt-1 text-sm text-red-600">{errors.card_number}</p>
        )}
      </div>

      <div>
        <LabeledField
          label="Nom sur la carte"
          name="card_name"
          value={formData.card_name}
          onChange={onChange}
        />
        {errors.card_name && (
          <p className="mt-1 text-sm text-red-600">{errors.card_name}</p>
        )}
      </div>

      <div>
        <LabeledField
          label="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={onChange}
          maxLength={3}
        />
        {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
      </div>

      <div>
        <LabeledField
          label="Date d'expiration"
          name="expiry_date"
          type="date"
          value={formData.expiry_date}
          onChange={onChange}
        />
        {errors.expiry_date && (
          <p className="mt-1 text-sm text-red-600">{errors.expiry_date}</p>
        )}
      </div>

      <div>
        <LabeledField
          label="Adresse de facturation"
          name="billing_address"
          value={formData.billing_address}
          onChange={onChange}
        />
        {errors.billing_address && (
          <p className="mt-1 text-sm text-red-600">{errors.billing_address}</p>
        )}
      </div>
    </div>
  );
}