import { useDarkMode } from "../contexts/DarkModeContext";

function Meteor({ meteor }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className="meteor animate-meteor"
      style={{
        width: meteor.size * 50 + "px",
        height: meteor.size * 2 + "px",
        left: `${meteor.x}%`,
        top: `${meteor.y}%`,
        background: !isDarkMode && meteor.color,
        animationDelay: `${meteor.delay}s`,
        animationDuration: `${meteor.animationDuration}s`,
      }}
    />
  );
}

export default Meteor;
