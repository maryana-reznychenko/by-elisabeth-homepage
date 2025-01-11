// - - - - - - - - - - - - - - - - - - - -
//This is the sidebar menu for small screens implemented in Header.jsx
// - - - - - - - - - - - - - - - - - - - -

import { HiOutlineX } from "react-icons/hi";
import Logo from "../../public/logo/LogoLight.svg";
import scrollToTheTop from "../helpers/scrollToTheTop";

const SidebarMenu = ({ isOpen, onClose, handleMenuItemClick }) => {
  const handleLogoClick = () => {
    onClose(); // Close the menu
    scrollToTheTop(); // Scroll to the top of the page
  };

  return (
    <nav
      className={`fixed inset-0  py-7 px-5 flex flex-col items-start h-dvh overflow-auto bg-accent text-font-light transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="w-full flex justify-between">
        <img
          src={Logo}
          alt="Company Logo"
          width="210"
          height="50"
          onClick={handleLogoClick}
        />

        <button onClick={onClose}>
          <HiOutlineX size="2rem" />
        </button>
      </div>
      <ul className="flex flex-col mt-14 md:pl-5 gap-5 font-arimo text-2xl uppercase tracking-tight ">
        <li onClick={handleMenuItemClick}>
          <a href="#holistisk-halsa">• holistisk hälsa</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#behandlingar">• behandlingar</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#priser">• priser</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#ditt-besok">• ditt besök</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#om-mig">• om mig</a>
        </li>
        <li className="mt-5">
          <p className="m-0 pb-0">adress:</p>
          <a
            href="https://www.google.com/maps/@59.306233,18.0293704,3a,75y,4.71h,90t/data=!3m7!1e1!3m5!1spKQ3LqVX_YVjisIONn8YVg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DpKQ3LqVX_YVjisIONn8YVg%26yaw%3D4.7062254!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="normal-case tracking-normal text-lg"
          >
            Fredsborgsgatan 21, 117 58 Stockholm
          </a>
        </li>
        <li>
          <p className="m-0 pb-0">öppettider:</p>
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
