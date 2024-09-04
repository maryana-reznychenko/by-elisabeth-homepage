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
              href="https://www.google.com/maps/@59.3229702,18.07108,3a,75y,35.07h,90t/data=!3m7!1e1!3m5!1srrkhRu-pdNllHY7ZXFgSCA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DrrkhRu-pdNllHY7ZXFgSCA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D35.07396%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?coh=205409&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
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
            Created by
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
