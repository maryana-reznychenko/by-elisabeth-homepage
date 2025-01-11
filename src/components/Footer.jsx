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
              href="https://www.google.com/maps/@59.306233,18.0293704,3a,75y,4.71h,90t/data=!3m7!1e1!3m5!1spKQ3LqVX_YVjisIONn8YVg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DpKQ3LqVX_YVjisIONn8YVg%26yaw%3D4.7062254!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fredsborgsgatan 21, 117 58 Stockholm
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
            Elisabeth's photo is private.
          </small>
        </p>

        <div className="flex flex-col justify-center items-center">
          <GetCurrentYear />
          <p>
            <small>
              Created & developed by{" "}
              <a
                href="https://www.linkedin.com/in/marianna-reznychenko-255666154/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marianna.R
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
