import { useState, useEffect } from "react";

function TypingAnimation({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((current) => !current);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setCurrentText(text.substring(0, i + 1));
      }, 100 * i);
    }
  }, [text]);

  return (
    <div className="text-black dark:text-white text-xl md:text-2xl font-bold">
      {currentText}
      {showCursor && <span>|</span>}
    </div>
  );
}

export default TypingAnimation;
