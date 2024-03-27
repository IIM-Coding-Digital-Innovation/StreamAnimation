import { useEffect } from "react";

export const useKey = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        // e.preventDefault();
        callback(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === key) {
        // e.preventDefault();
        callback(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, callback]);
};