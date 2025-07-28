import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export function useStars() {
  const [stars, setStars] = useState([]);
  const { isDarkMode } = useDarkMode();
  function generateStars() {
    const numOfStars =
      Math.floor(window.innerWidth * window.innerHeight) / 10000;

    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: isDarkMode
          ? Math.random() * 0.5 + 0.5
          : Math.random() * 0.7 + 0.3,
        color: !isDarkMode && `hsl(${Math.random() * 30 + 20}, 40%, 85%)`,
        animationDuration: Math.random() * 4 + 2,
      });

      setStars(newStars);
    }
  }
  return { stars, generateStars };
}
