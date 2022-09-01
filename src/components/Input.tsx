import { Dispatch, SetStateAction } from "react";

interface IInputProps {
  type: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  messageError?: string;
  required?: boolean;
}

export default function Input({
  type,
  label,
  value,
  setValue,
  messageError,
  required = true,
}: IInputProps) {
  return (
    <fieldset className="flex flex-col group">
      <label htmlFor={type} className="font-medium">
        {label}
      </label>

      <input
        id={type}
        name={type}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 rounded bg-zinc-50 border-b-2 border-zinc-200 max-w-full
        hover:border-primary-500 focus:outline-none
        focus:border-primary-500 transition-colors duration-200"
        required={required}
      />

      <span className="text-cancel-hover text-sm font-medium">
        {messageError}
      </span>
    </fieldset>
  );
}
