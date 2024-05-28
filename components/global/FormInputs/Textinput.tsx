import { cn } from "@/lib/utils";
import React from "react";

type TextInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
};

export default function TextInput({ register, errors, label, type = "text", name }: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6
                    text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          type={type}
          {...register(`${name}`, { required: true })}
          className={cn(
            "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm-leading-6 text-sm",
            errors[`${name}`] && "focus:ring-red-500"
          )}
        />
        {errors[`${name}`] && <span className="text-xs text-red-600">{label} is required</span>}
      </div>
    </div>
  );
}
