import styles from "./FormInput.module.css";
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
    <div className={styles.group}>
      <input className={styles["form-input"]} {...inputAttributes} />
      {label ? (
        <label
          className={cn(
            {
              shrink: dirty,
            },
            styles["form-input-label"],
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
