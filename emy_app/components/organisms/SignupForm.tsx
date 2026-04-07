"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "../atoms/Title";
import FormError from "../atoms/FormError";
import Button from "../atoms/Button";
import AppLink from "../atoms/AppLink";
import LabeledField from "../molecules/LabeledField";
import AvatarPicker from "../molecules/AvatarPicker";
import type { SignupFormData } from "@/hooks/Type_DTO";
import Verification from "./VerificationForm";
import { fetchApi } from "@/fetchs/global";

type SignupErrors = Partial<Record<keyof SignupFormData, string>>;

const initialForm: SignupFormData = {
  user_name: "",
  name: "",
  surname: "",
  address: "",
  email: "",
  phone: "",
  birth_date: "",
  avatar: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

function courrielEstValide(courriel: string) {
  return (
    typeof courriel === "string" &&
    /(?:[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+(?:\.[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9\x2d]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      courriel,
    )
  );
}

function motDePasseEstValide(motDePasse: string) {
  return typeof motDePasse === "string" && motDePasse.length >= 8;
}

function telephoneEstValide(phone: string) {
  return typeof phone === "string" && phone.trim().length >= 8;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[11px] text-red-600">{message}</p>;
}

/**
 * Formulaire de creation d'un compte
 */
export default function SignupForm() {
  const [form, setForm] = useState<SignupFormData>(initialForm);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [verified,setVerified]=useState(false)
  const [verify,setVerify]=useState(false)
  const [code,setCode]=useState('')
  const formRef=useRef<HTMLFormElement|null>(null)

  function validateField<K extends keyof SignupFormData>(
    field: K,
    value: SignupFormData[K],
    currentForm: SignupFormData,
  ): string {
    switch (field) {
      case "user_name":
        return typeof value === "string" && value.trim()
          ? ""
          : "Le nom d'utilisateur est obligatoire.";

      case "name":
        return typeof value === "string" && value.trim()
          ? ""
          : "Le nom est obligatoire.";

      case "surname":
        return typeof value === "string" && value.trim()
          ? ""
          : "Le prénom est obligatoire.";

      case "address":
        return typeof value === "string" && value.trim()
          ? ""
          : "L’adresse est obligatoire.";

      case "email":
        if (typeof value !== "string" || !value.trim()) {
          return "Le courriel est obligatoire.";
        }
        if (!courrielEstValide(value.trim().toLowerCase())) {
          return "Le format du courriel est invalide.";
        }
        return "";

      case "phone":
        if (typeof value !== "string" || !value.trim()) {
          return "Le numéro de téléphone est obligatoire.";
        }
        if (!telephoneEstValide(value)) {
          return "Le numéro de téléphone est invalide.";
        }
        return "";

      case "birth_date":
        return typeof value === "string" && value.trim()
          ? ""
          : "La date de naissance est obligatoire.";

      case "avatar":
        return typeof value === "string" && value.trim()
          ? ""
          : "Veuillez sélectionner un avatar.";

      case "password":
        if (typeof value !== "string" || !value.trim()) {
          return "Le mot de passe est obligatoire.";
        }
        if (!motDePasseEstValide(value)) {
          return "Le mot de passe doit contenir au moins 8 caractères.";
        }
        return "";

      case "confirmPassword":
        if (typeof value !== "string" || !value.trim()) {
          return "La confirmation du mot de passe est obligatoire.";
        }
        if (value !== currentForm.password) {
          return "Les mots de passe ne correspondent pas.";
        }
        return "";

      case "acceptTerms":
        return value === true
          ? ""
          : "Vous devez accepter les termes et conditions.";

      default:
        return "";
    }
  }

  function validateForm(currentForm: SignupFormData): SignupErrors {
    return {
      user_name: validateField("user_name", currentForm.user_name, currentForm),
      name: validateField("name", currentForm.name, currentForm),
      surname: validateField("surname", currentForm.surname, currentForm),
      address: validateField("address", currentForm.address, currentForm),
      email: validateField("email", currentForm.email, currentForm),
      phone: validateField("phone", currentForm.phone, currentForm),
      birth_date: validateField(
        "birth_date",
        currentForm.birth_date,
        currentForm,
      ),
      avatar: validateField("avatar", currentForm.avatar, currentForm),
      password: validateField("password", currentForm.password, currentForm),
      confirmPassword: validateField(
        "confirmPassword",
        currentForm.confirmPassword,
        currentForm,
      ),
      acceptTerms: validateField(
        "acceptTerms",
        currentForm.acceptTerms,
        currentForm,
      ),
    };
  }

  function hasErrors(formErrors: SignupErrors) {
    return Object.values(formErrors).some((message) => !!message);
  }

  function updateField<K extends keyof SignupFormData>(
    field: K,
    value: SignupFormData[K],
  ) {
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value, updatedForm),
      ...(field === "password"
        ? {
            confirmPassword: validateField(
              "confirmPassword",
              updatedForm.confirmPassword,
              updatedForm,
            ),
          }
        : {}),
    }));

    setError("");
  }

  useEffect(() => {
    const username = form.user_name.trim();

    if (!username) {
      setCheckingUsername(false);
      return;
    }

    if (
      errors.user_name &&
      errors.user_name !== "Ce nom d'utilisateur est déjà utilisé."
    ) {
      setCheckingUsername(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setCheckingUsername(true);

        const res = await fetch(
          `/api/member/user_name?user_name=${encodeURIComponent(username)}`,
        );

        if (!res.ok) {
          setCheckingUsername(false);
          return;
        }

        const data = await res.json();

        setErrors((prev) => ({
          ...prev,
          user_name: data ? "Ce nom d'utilisateur est déjà utilisé." : "",
        }));
      } catch {
        setError(
          "Impossible de vérifier le nom d'utilisateur pour le moment. Veuillez reessayer plutard",
        );
      } finally {
        setCheckingUsername(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [form.user_name, errors.user_name]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const validationErrors = validateForm(form);

    if (!validationErrors.user_name && form.user_name.trim()) {
      try {
        const res = await fetch(
          `/api/member/user_name?user_name=${encodeURIComponent(
            form.user_name.trim(),
          )}`,
        );

        if (res.ok) {
          const data = await res.json();
          if (data) {
            validationErrors.user_name =
              "Ce nom d'utilisateur est déjà utilisé.";
          }
        }
      } catch {
        setError(
          "Impossible de vérifier le nom d'utilisateur pour le moment. Veuillez reessayer plutard",
        );
      }
    }

    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setLoading(true);
    if (!verified) {
      await handleCode();
      setLoading(false);
      return;
    }
    try {
      const payload = {
        user_name: form.user_name.trim(),
        name: form.name.trim(),
        surname: form.surname.trim(),
        address: form.address.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        birth_date: form.birth_date,
        avatar: form.avatar.trim(),
        password: form.password,
      };

      const res = await fetch("/api/member/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Impossible de créer le compte.";
        try {
          const data = await res.json();
          if (data?.message) msg = data.message;
        } catch {}
        setError(msg);
        return;
      }

      setForm(initialForm);
      setErrors({});
      //location.href = d"/login";
      history.back();
    } catch {
      setError("Erreur serveur. Réessaie plus tard.");
    } finally {
      setLoading(false);
    }
  }
  const createCode=()=>{
    let code=(Math.random()*0.99).toPrecision(4)
    const val =code.split('.').join('')
    return val
  }
  const handleCode= async ()=>{
    const codeV=createCode()
    
    const payload={
      user_name:form.user_name,
      code:codeV,
      email:form.email
    }
    const res=await fetchApi(payload,'/api/sendMail/verificationEmail','POST')
    if(res){
      setCode(codeV)
      setVerify(true)
    }
  }
  if(verify) return <Verification code={code}
      onSuccess={()=>{setVerify(false);setVerified(true);formRef.current?.requestSubmit()}}
      onResend={handleCode}
    />
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex w-full flex-col items-center text-gray-900"
    >
      <Title as="p" className="mb-3 text-xs">
        SIGN IN
      </Title>

      <div className="w-[220px]">
        <div className="my-2">
          <LabeledField
            placeholder="@username"
            value={form.user_name}
            onChange={(e) => updateField("user_name", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.user_name ? "border-red-500" : ""
            }`}
          />
          {checkingUsername && !errors.user_name && (
            <p className="mt-1 text-[11px] text-gray-500">
              Vérification du nom d utilisateur...
            </p>
          )}
          <FieldError message={errors.user_name} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.name} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="surname"
            value={form.surname}
            onChange={(e) => updateField("surname", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.surname ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.surname} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="address"
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.address} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.email} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="date of birth"
            type="date"
            value={form.birth_date}
            onChange={(e) => updateField("birth_date", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.birth_date ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.birth_date} />
        </div>

        <AvatarPicker
          value={form.avatar}
          error={errors.avatar}
          onChange={(value) => updateField("avatar", value)}
        />

        <div className="my-2">
          <LabeledField
            placeholder="password"
            type="password"
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.password} />
        </div>

        <div className="my-2">
          <LabeledField
            placeholder="confirm password"
            type="password"
            value={form.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            inputClassName={`py-2 text-xs rounded-lg ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          <FieldError message={errors.confirmPassword} />
        </div>

        <div className="my-2">
          <div className="flex items-center gap-2 text-[11px] text-black/80">
            <input
              type="checkbox"
              checked={form.acceptTerms}
              onChange={(e) => updateField("acceptTerms", e.target.checked)}
            />
            <AppLink
              href="/termesEtConditions"
              className="text-[11px] text-blue-700 hover:underline"
            >
              Accepter les termes et conditions.
            </AppLink>
          </div>
          <FieldError message={errors.acceptTerms} />
        </div>

        <div className="my-2">
          <FormError message={error} />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3">
          <Button
            type="submit"
            title={loading||verify ? "LOADING..." : "CONFIRM"}
            disabled={loading || checkingUsername}
            size="text-[10px]"
            className="w-full py-2"
            color="bg-black/80 border-black/80 text-white hover:bg-black/90"
          />

          <Button
            type="button"
            title="ANNULER"
            size="text-[10px]"
            className="w-full py-2"
            color="bg-white/80 border-white/80 text-black hover:bg-white"
            onClick={() => history.back()}
          />
        </div>

        <div className="mt-3 text-center">
          <AppLink
            href="/login"
            className="text-[11px] text-black hover:underline"
          >
            Déjà un compte ? Log in
          </AppLink>
        </div>
      </div>
    </form>
  );
}
