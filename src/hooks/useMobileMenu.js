import { useState } from "react";

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    close,
  };
};

export default useMobileMenu;
