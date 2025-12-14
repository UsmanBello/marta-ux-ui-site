"use client";

import { useState, useEffect } from "react";

export default function HeroTyping() {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset state when component mounts
    setFirstLine("");
    setSecondLine("");

    const firstText = "Hello, I'm";
    const secondText = "Marta Bensalem";
    const speed = 100;

    let firstInterval: NodeJS.Timeout;
    let secondInterval: NodeJS.Timeout;
    let secondTimeout: NodeJS.Timeout;

    // Type first line
    let firstIndex = 0;
    firstInterval = setInterval(() => {
      if (firstIndex < firstText.length) {
        setFirstLine(firstText.slice(0, firstIndex + 1));
        firstIndex++;
      } else {
        clearInterval(firstInterval);
        
        // Wait a bit before starting second line
        secondTimeout = setTimeout(() => {
          // Type second line
          let secondIndex = 0;
          secondInterval = setInterval(() => {
            if (secondIndex < secondText.length) {
              setSecondLine(secondText.slice(0, secondIndex + 1));
              secondIndex++;
            } else {
              clearInterval(secondInterval);
            }
          }, speed);
        }, 300);
      }
    }, speed);

    return () => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
      clearTimeout(secondTimeout);
    };
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const firstText = "Hello, I'm";
  const secondText = "Marta Bensalem";
  const isFirstLineComplete = firstLine.length === firstText.length;
  const isSecondLineComplete = secondLine.length === secondText.length;
  const isFirstLineTyping = firstLine.length < firstText.length;
  const isSecondLineTyping = secondLine.length > 0 && secondLine.length < secondText.length;
  
  // Show cursor only while actively typing each line
  const showFirstCursor = isFirstLineTyping;
  const showSecondCursor = isSecondLineTyping;

  return (
    <>
      {firstLine}
      {showFirstCursor && <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>}
      <br />
      <span className="text-gradient-accent">
        {secondLine}
        {showSecondCursor && <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>}
      </span>
    </>
  );
}

