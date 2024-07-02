import "./FormInput.styles.css";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";
import FormError from "./FormError/FormError.components";

interface FormInputProps {
  label?: string;
  dirty?: boolean;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  error?: string;
}

function FormInput({ label, dirty, inputAttributes = {}, error }: FormInputProps) {
  return (
    <div className="group">
      <input className="form-input" {...inputAttributes} />
      {label ? (
        <label
          className={cn(
            {
              shrink: dirty,
            },
            "form-input-label",
          )}
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      {error ? <FormError>{error}</FormError> : <></>}
    </div>
  );
}

export default FormInput;
