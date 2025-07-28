import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { SCROLL_THRESHOLD } from "../helpers/constants";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.screenY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
      )}
    >
      <div className="container flex items-center justify-between ">
        <Logo />
        <NavMenu />
      </div>
    </nav>
  );
}

export default NavBar;
