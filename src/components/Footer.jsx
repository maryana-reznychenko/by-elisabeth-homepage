import facebook_icon from "../assets/icons/facebook_icon.svg";
import instagram_icon from "../assets/icons/instagram_icon.svg";

function Footer() {
  //-> Function to get current year for copiright:
  function GetCurrentYear() {
    let currentYear = new Date().getFullYear();
    return (
      <p>
        <small>Copyright@{currentYear}</small>
      </p>
    );
  }

  return (
    <footer className="flex justify-end py-6 px-5 lg:px-16  mt-auto ">
      <address>
        <ul className="flex gap-5 ">
          <li>
            <a
              href="https://www.google.com/maps/place/Kornhamnstorg+49,+111+27+Stockholm/@59.3230395,18.0686441,17z/data=!3m1!4b1!4m6!3m5!1s0x465f77e2e27606a5:0xc291581af3d4c480!8m2!3d59.3230395!4d18.071219!16s%2Fg%2F11c2hpws0_?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kornhamnstorg 49 111 27 Stockholm
            </a>
          </li>

          <li>
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

          <li>
            <a
              href="https://www.instagram.com/sageforselisabeth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8"
                src={instagram_icon}
                alt="Instagram icon"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/elisabeth.sagefors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8"
                src={facebook_icon}
                alt="Facebook icon"
              ></img>
            </a>
          </li>
        </ul>
      </address>
      <div>
        <GetCurrentYear />
        <p>
          <small>
            The images used on this page are{" "}
            <a
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed by Freepik.
            </a>
          </small>
        </p>
        <p>
          <small>Elisabeth's photo is a private.</small>
        </p>
        <p>
          <small>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/maryana-reznychenko-255666154/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maryana.R
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
