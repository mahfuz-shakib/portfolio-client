import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts = [],
  typingSpeed = 75,
  eraseSpeed = 50,
  delayBetween = 1500
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      // typing
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // when full text typed → wait then erase
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      }
    } else {
      // erasing
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else {
        // move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, eraseSpeed, delayBetween]);

  return (
    <span>
      {displayText}
      <span style={{ marginLeft: "2px", animation: "blink 1s infinite" }}>|</span>
    </span>
  );
};

export default TypingEffect;
