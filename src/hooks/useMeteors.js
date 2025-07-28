import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export function useMeteors() {
  const [meteors, setMeteors] = useState([]);
  const { isDarkmode } = useDarkMode();

  function generateMeteors() {
    const numOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: isDarkmode ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 20,
        color:
          !isDarkmode &&
          "linear-gradient(to right, hsl(200, 100%, 60%), transparent)",
        animationDelay: isDarkmode ? Math.random() * 15 : Math.random() * 2 + 2,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  }
  return { meteors, generateMeteors };
}
