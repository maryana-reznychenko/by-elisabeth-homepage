// - - - - - - - - - - - - - - - - - - - - - - - -
//Menu button component for smaller screens
// - - - - - - - - - - - - - - - - - - - - - - - -

import React, { useState, useCallback } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../assets/logo/LogoDark.svg";
import SidebarMenu from "./SidebarMenu";
import SwitchLanguageButton from "./SwitchLanguageButton";

const MenuButton = ({ isOpen, toggleMenu }) => (
  <button onClick={toggleMenu}>
    <HiOutlineMenuAlt3 size="2rem" />
  </button>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <nav className="flex lg:items-center items-start justify-between py-6 px-5 tracking-wide">
        {/* Company Logo */}
        <img src={Logo} alt="Company Logo" width="210" height="50" />

        {/* Menu Button for small screens */}
        <div className="lg:hidden flex flex-col items-end w-100%">
          <MenuButton toggleMenu={toggleMenu} />
        </div>

        {/* Navigation Links for large screens */}
        <ul className="hidden lg:flex gap-5 font-arimo text-lg uppercase tracking-tight ">
          <li>
            <a href="#">holistisk hälsa</a>
          </li>
          <li>
            <a href="#">behandlingar</a>
          </li>
          <li>
            <a href="#">priser</a>
          </li>
          <li>
            <a href="#">ditt besök</a>
          </li>
          <li>
            <a href="#">om mig</a>
          </li>
          <li>
            <SwitchLanguageButton />
          </li>
        </ul>
      </nav>
      {/* SidebarMenu for small screens */}

      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        handleMenuItemClick={handleMenuItemClick}
      />
    </header>
  );
};

export default Header;
