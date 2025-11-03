import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ strings, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[currentIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentString.length) {
          setDisplayText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, pause then delete
          setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, pauseTime);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    handleTyping();
  }, [strings, currentIndex, isDeleting, charIndex, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="relative inline-block">
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 bg-primary ml-1"
      >|</motion.span>
    </span>
  );
};

export default TypingEffect;

