import { Dispatch, SetStateAction, ReactNode, useState } from "react";

interface IInputProps {
  id?: string;
  type: string;
  label: string;
  Icon?: ReactNode;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  messageError?: string;
  required?: boolean;
}

export default function Input({
  type,
  id = type,
  label,
  value,
  Icon,
  setValue,
  messageError,
  required = true,
}: IInputProps) {
  // const isValid = () => {
  //   if (type === "password") {
  //     if (value.length < 8 && value !== "") {
  //       messageError = "A senha contém mais de 7 dígitos";
  //       return "cancel-hover";
  //     } else {
  //       return "success-hover";
  //     }
  //   } else {
  //     return "primary-500";
  //   }
  // };

  const isPasswordValid =
    type === "password"
      ? value.length < 8 && value !== ""
        ? (messageError = "A senha contém mais de 7 dígitos") && "cancel-hover"
        : "success-hover"
      : "";

  return (
    <fieldset className="flex flex-col group relative">
      <label htmlFor={id} className="text-zinc-900 font-medium">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`p-2 ${
          Icon ? "pl-8" : ""
        } rounded bg-zinc-50 border-b-2 border-zinc-200 max-w-full
        hover:border-primary-500 transition-colors duration-200
        focus:border-primary-500
        focus:border-${isPasswordValid}
        focus:outline-none`}
        required={required}
      />
      <div className="top-9 left-2 absolute">{Icon}</div>
      <span className="text-cancel-hover text-sm font-medium">
        {messageError}
      </span>
    </fieldset>
  );
}
