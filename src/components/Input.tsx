import { Dispatch, SetStateAction, ReactNode } from "react";

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
  const checkEmail = value.search(/\S+@\S+\.\S+/);
  const checkPassword = value.length < 8;

  const checkedType =
    value === ""
      ? "focus:border-primary-500"
      : type === "email"
      ? checkEmail
        ? "focus:border-cancel-hover"
        : "focus:border-success-hover"
      : type === "password"
      ? checkPassword
        ? "focus:border-cancel-hover"
        : "focus:border-success-hover"
      : "focus:border-success-hover";

  return (
    <fieldset className="flex flex-col group relative">
      <label htmlFor={id} className="text-zinc-900 font-medium">
        {label}
      </label>
      <div className="top-9 left-2 absolute text-primary-500">{Icon}</div>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`p-2 pl-8 rounded bg-zinc-50 border-b-2 border-zinc-200 max-w-full
        hover:border-primary-500 transition-colors duration-200
        ${checkedType}
        focus:outline-none`}
        required={required}
      />

      <span className="text-cancel-hover text-sm font-medium">
        {messageError}
      </span>
    </fieldset>
  );
}
