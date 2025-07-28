import { useState } from "react";

export function useToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return { isMenuOpen, setIsMenuOpen };
}
