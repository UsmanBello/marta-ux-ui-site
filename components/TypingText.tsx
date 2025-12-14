"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypingText({ 
  text, 
  speed = 100, 
  delay = 0,
  className = "",
  showCursor: shouldShowCursor = true
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const startTyping = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTyping);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  // Blinking cursor effect
  useEffect(() => {
    if (!shouldShowCursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [shouldShowCursor]);

  return (
    <span className={className}>
      {displayedText}
      {shouldShowCursor && (isTyping || displayedText.length === text.length) && (
        <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
      )}
    </span>
  );
}

