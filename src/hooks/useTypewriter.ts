import { useState, useEffect } from 'react';

// Default texts for typewriter effect
export const TYPEWRITER_TEXTS = ['Frontend developer', 'UX designer', 'Design passioned'];

/**
 * Custom hook for typewriter effect
 * @param texts - Array of texts to cycle through (default: TYPEWRITER_TEXTS)
 * @param typingSpeed - Speed of typing in milliseconds (default: 100)
 * @param deletingSpeed - Speed of deleting in milliseconds (default: 50)
 * @param pauseDuration - Duration to pause before deleting in milliseconds (default: 2000)
 * @returns The currently displayed text
 */
export const useTypewriter = (
  texts: string[] = TYPEWRITER_TEXTS,
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Skriver ut bokstav för bokstav
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Vänta lite innan radering börjar
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Raderar bokstav för bokstav
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Byt till nästa text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
};

