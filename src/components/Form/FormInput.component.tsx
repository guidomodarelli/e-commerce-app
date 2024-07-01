import "./FormInput.styles.css";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";
import FormError from "./FormError/FormError.components";

interface FormInputProps {
  label?: string;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  error?: string;
}

function FormInput({ label, inputAttributes = {}, error }: FormInputProps) {
  console.log(inputAttributes);
  return (
    <div className="group">
      <input className="form-input" {...inputAttributes} />
      {label && (
        <label
          className={cn(
            {
              shrink: (inputAttributes.value as string)?.length,
            },
            "form-input-label",
          )}
        >
          {label}
        </label>
      )}
      {error ? <FormError>{error}</FormError> : <></>}
    </div>
  );
}

export default FormInput;
