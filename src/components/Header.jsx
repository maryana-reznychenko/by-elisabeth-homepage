import React, { useState, useCallback } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Logo from "../assets/logo/LogoDark.svg";

//- - - - - - - - - - - - - - - - - - - - - - - - -
// Functionality for toggle MenuButton
//- - - - - - - - - - - - - - - - - - - - - - - - -
const MenuButton = ({ isOpen, toggleMenu }) => (
  <button onClick={toggleMenu}>
    {isOpen ? <HiOutlineMenuAlt3 size="2rem" /> : <HiOutlineX size="2rem" />}
  </button>
);

//- - - - - - - - - - - - - - - - - - - - - - -
//HEADER -> hook & function for the closed menu for small screens
//- - - - - - - - - - - - - - - - - - - - - - -
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  //- - - - - - - - - - - - - - - - - - - - - - -
  //Function for automatically close the menu when a menu item is chosen
  //- - - - - - - - - - - - - - - - - - - - - - -
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md">
      <nav className="flex lg:items-center items-start justify-between py-6 px-5 tracking-wide">
        <img src={Logo} alt="Company Logo" width="200" height="50" />

        <div className="lg:hidden flex flex-col items-end w-100%">
          <MenuButton isOpen={!isMenuOpen} toggleMenu={toggleMenu} />
          {/* {isMenuOpen && (
            <ul onClick={handleMenuItemClick}>
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
                <p>adress:</p>
                <a
                  href="https://www.google.com/maps/@59.3229702,18.07108,3a,75y,35.07h,90t/data=!3m7!1e1!3m5!1srrkhRu-pdNllHY7ZXFgSCA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DrrkhRu-pdNllHY7ZXFgSCA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D35.07396%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?coh=205409&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kornhamnstorg 49 111 27 Stockholm
                </a>
              </li>
              <li>
                <p>öppettider:</p>
                <a
                  href="https://www.bokadirekt.se/places/skonhet-och-halsa-52698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enligt bokningar via Bokadirekt
                </a>
              </li>
              <li>
                <br />
                <a
                  href="tel:+46736287882"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +46736287882
                </a>
              </li>
              <li>
                <a
                  href="mailto:by.elisabeth@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  by.elisabeth@outlook.com
                </a>
              </li>
            </ul>

         
          )} */}
        </div>

        <ul className="hidden lg:flex gap-5 tracking-wide">
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
        </ul>
      </nav>
    </header>
  );
};
export default Header;
