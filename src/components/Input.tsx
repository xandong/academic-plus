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
  const classDefault =
    "hover:border-primary-500 dark:hover:border-primary-200 focus:border-primary-500 focus:focus:border-primary-500 dark:border-zinc-500";
  const success = "border-success-hover hover:none focus:none";
  const error = "border-cancel-hover hover:none focus:none";

  const checkedType =
    value === ""
      ? classDefault
      : type === "email"
      ? checkEmail
        ? error
        : success
      : type === "password"
      ? checkPassword
        ? error
        : success
      : "";

  return (
    <fieldset className="flex flex-col group relative">
      <label htmlFor={id} className="py-px font-medium">
        {label}
      </label>
      <div
        className="top-[1.65rem] py-[0.75rem] px-3 rounded-l group-hover:bg-primary-500 
        dark:group-hover:bg-primary-200
      group-hover:text-zinc-50 absolute  transition-colors"
      >
        {Icon}
      </div>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`p-2 pl-11 rounded bg-zinc-50 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-200 max-w-full transition-colors duration-200
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
