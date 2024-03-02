import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function TypingAnimation() {
	const { i18n, t } = useTranslation();
	const language = i18n.language;
	const typingtText = t("about.title");
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

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
      setCurrentText(typingtText.substring(0, i + 1));
      i++;
      if (i >= typingtText.length) {
        clearInterval(typingEffectRef.current);
      }
    }, 100);

    return () => clearInterval(typingEffectRef.current);
  }, [typingtText]);

  return (
    <div className="text-black dark:text-white text-xl md:text-2xl font-bold">
      {currentText}
      {showCursor && <span>|</span>}
    </div>
  );
}

export default TypingAnimation;
