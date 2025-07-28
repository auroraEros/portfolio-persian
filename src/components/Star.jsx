import { useDarkMode } from "../contexts/DarkModeContext";

function Star({ star }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className="star animate-pulse-subtle"
      style={{
        width: `${star.size}px`,
        height: `${star.size}px`,
        left: `${star.x}%`,
        top: `${star.y}%`,
        backgroundColor: !isDarkMode && star.color,
        opacity: `${star.opacity}`,
        animationDuration: `${star.animationDuration}s`,
        boxShadow:
          !isDarkMode &&
          `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255, 196, 50, 0.5)`,
      }}
    />
  );
}

export default Star;
