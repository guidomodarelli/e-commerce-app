import { handleAuthError } from "@/setup";
import { useEffect } from "react";

interface AuthErrorProps {
  error: Error | null;
  setError: (field: string, message: string) => void;
}

export function useAuthError({ error, setError }: AuthErrorProps) {
  useEffect(() => {
    if (!error) return;
    const errorInfo = handleAuthError(error);
    if (errorInfo) {
      setError(errorInfo.field, errorInfo.message);
    }
  }, [error, setError]);
}
