import { navItems } from "../helpers/constants";
import { useToggleMenu } from "../hooks/useToggleMenue";
import { cn } from "../lib/utils";
import DarkModeToggle from "./DarkModeToggle";
import MenuButton from "./MenuButton";

function NavMenu() {
  const { isMenuOpen, setIsMenuOpen } = useToggleMenu();

  return (
    <div className="flex gap-x-6 justify-center bg-transparent">
      {/* descktop version */}
      <div className="hidden md:flex flex-row-reverse items-center gap-x-8">
        {navItems.map((item, key) => (
          <a
            key={`${item.label.toLowerCase}-${key}`}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* mobile version */}
      <MenuButton />

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95  backdrop-blur-md",
          "flex flex-col justify-center items-center transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col  gap-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={`${item.label.toLowerCase}-${key}`}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default NavMenu;
