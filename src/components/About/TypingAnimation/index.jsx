import { useState, useEffect, useRef } from "react";

function TypingAnimation({ language }) {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text =
    language === "en-US"
      ? "Hello! My name is Prince"
      : "Olá! Meu nome é Prince";

  const typingEffectRef = useRef(null);

  useEffect(() => {
    if (typingEffectRef.current) {
      clearInterval(typingEffectRef.current);
    }

    const intervalId = setInterval(() => {
      setShowCursor((current) => !current);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(typingEffectRef.current);
    };
  }, [language]);

  useEffect(() => {
    let i = 0;

    typingEffectRef.current = setInterval(() => {
      setCurrentText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(typingEffectRef.current);
      }
    }, 100);

    return () => clearInterval(typingEffectRef.current);
  }, [text]);

  return (
    <div className="text-black dark:text-white text-xl md:text-2xl font-bold">
      {currentText}
      {showCursor && <span>|</span>}
    </div>
  );
}

export default TypingAnimation;
