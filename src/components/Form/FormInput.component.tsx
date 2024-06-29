import { UseFormRegisterReturn } from "react-hook-form";
import "./FormInput.styles.css";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";

interface FormInputProps {
  label?: string;
  register: UseFormRegisterReturn;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
}

function FormInput({ label, register, inputAttributes = {} }: FormInputProps) {
  return (
    <div className="group">
      <input className="form-input" {...register} />
      {label && (
        <label
          className={cn(
            {
              shrink: (inputAttributes?.value as string)?.length,
            },
            "form-input-label",
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
