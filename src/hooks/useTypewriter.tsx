import { useState, useEffect } from "react";

export const useTypewriter = (text?: string) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (!text) return;

    // Reset visible letters when subLabel changes
    setVisibleLetters(0);

    const typewriterEffect = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 35); // Adjust typing speed here (milliseconds per character)

      return () => clearInterval(interval);
    }, 0); // Initial delay before typing starts

    return () => {
      clearTimeout(typewriterEffect);
    };
  }, [text]);

  return visibleLetters;
};
