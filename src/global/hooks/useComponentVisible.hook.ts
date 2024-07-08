import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref.current?.contains(event.target as T)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref };
}
