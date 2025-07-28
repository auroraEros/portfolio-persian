import { Menu, X } from "lucide-react";
import { useToggleMenu } from "../hooks/useToggleMenue";

function MenuButton() {
  const { isMenuOpen, setIsMenuOpen } = useToggleMenu();
  return (
    <button
      className="md:hidden p-2 text-foreground z-50 "
      onClick={() => setIsMenuOpen((prev) => !prev)}
      aria-label={isMenuOpen? "Close Menu":"Open Menu"}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

export default MenuButton;
