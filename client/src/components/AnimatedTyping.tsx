import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTypingProps {
  titles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function AnimatedTyping({ 
  titles, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}: AnimatedTypingProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(titles[currentTitleIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTitleIndex, isTyping, isDeleting, titles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="flex items-center justify-center min-h-[2.5rem]">
      <span className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        <br />
        <span className="text-sage font-medium">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-sage ml-1"
        />
      </span>
    </div>
  );
}
