// - - - - - - - - - - - - - - - - - - - -
//This is sidebar menu for small screens implemented in Header.jsx
// - - - - - - - - - - - - - - - - - - - -

import { HiOutlineX } from "react-icons/hi";
import SwitchLanguageButton from "./SwitchLanguageButton";

const SidebarMenu = ({ isOpen, onClose, handleMenuItemClick }) => {
  return (
    <nav
      className={`fixed inset-0  p-5 pl-10 flex flex-col items-start h-dvh bg-accent text-background transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="w-full flex justify-between">
        <SwitchLanguageButton />
        <button onClick={onClose}>
          <HiOutlineX size="2rem" />
        </button>
      </div>
      <ul className="flex flex-col mt-14 gap-5 font-arimo text-2xl uppercase tracking-tight ">
        <li onClick={handleMenuItemClick}>
          <a href="#">• holistisk hälsa</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#">• behandlingar</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#">• priser</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#">• ditt besök</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#">• om mig</a>
        </li>
        <li className="mt-2">
          <p>adress:</p>
          <a
            href="https://www.google.com/maps/place/Kornhamnstorg+49,+111+27+Stockholm/@59.3230395,18.0686441,17z/data=!3m1!4b1!4m6!3m5!1s0x465f77e2e27606a5:0xc291581af3d4c480!8m2!3d59.3230395!4d18.071219!16s%2Fg%2F11c2hpws0_?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="normal-case tracking-normal text-lg"
          >
            Kornhamnstorg 49, 111 27 Stockholm
          </a>
        </li>
        <li>
          <p>öppettider:</p>
          <a
            href="https://www.bokadirekt.se/places/skonhet-och-halsa-52698"
            target="_blank"
            rel="noopener noreferrer"
            className="normal-case tracking-normal text-lg"
          >
            Enligt bokningar via <strong>Bokadirekt</strong>
          </a>
        </li>
        <li>
          <a
            href="tel:+46736287882"
            target="_blank"
            rel="noopener noreferrer"
            className="lowercase tracking-normal text-lg"
          >
            +46736287882
          </a>
          <br />
          <a
            href="mailto:by.elisabeth@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lowercase tracking-normal text-lg"
          >
            by.elisabeth@outlook.com
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
