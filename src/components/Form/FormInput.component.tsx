import styles from "./FormInput.module.css";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes, ReactNode } from "react";
import FormError from "./FormError/FormError.components";

interface FormInputProps {
  label?: string;
  dirty?: boolean;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  error?: string;
}

function FormInput({ label, dirty, inputAttributes = {}, error }: FormInputProps) {
  let labelRender: ReactNode;
  if (label) {
    labelRender = <label className={cn({ shrink: dirty }, styles["form-input-label"])}>{label}</label>;
  }

  let errorRender: ReactNode;
  if (error) {
    errorRender = <FormError>{error}</FormError>;
  }

  return (
    <div className={styles.group}>
      <input className={styles["form-input"]} {...inputAttributes} />
      {labelRender}
      {errorRender}
    </div>
  );
}

export default FormInput;
