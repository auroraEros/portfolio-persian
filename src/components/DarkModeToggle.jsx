import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { cn } from "../lib/utils";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={cn(
        "max-sm:hidden rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 stroke-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 stroke-blue-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
