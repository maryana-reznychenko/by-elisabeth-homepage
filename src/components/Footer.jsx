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
    <footer className="p-5 lg:px-16  mt-auto text-font-light bg-font-main ">
      <address>
        <ul className="flex flex-col items-center gap-5 text-lg">
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
        </ul>
        <div className=" pt-5 pb-10 flex flex-raw justify-center items-center gap-10 ">
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
        </div>
      </address>
      <div>
        <p className="text-center">
          <small>
            The images used on this page are{" "}
            <a
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Designed by Freepik.
            </a>{" "}
            Elisabeth's photo is a private.
          </small>
        </p>

        <div className="flex flex-col justify-center items-center">
          <GetCurrentYear />
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
      </div>
    </footer>
  );
}

export default Footer;
