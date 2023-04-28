import { useState, useEffect } from "react";

function TypingAnimation({ text }) {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setCurrentText(text.substring(0, i + 1));
      }, 100 * i);
    }
  }, [text]);

  return <h1 className="text-lg md:text-3xl font-bold">{currentText}</h1>;
}

export default TypingAnimation;
