import { useEffect, useState } from "react";
import BgImage from "../../public/images/holistic_image.jpg";

function SectionHolistiscHealth() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Set background only for larger screens (md and above)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section
      id="holistisk-halsa"
      style={{
        backgroundImage: isLargeScreen ? `url(${BgImage})` : "none",
      }}
      className="bg-none md:bg-cover md:bg-no-repeat md:bg-right-top z-0 flex flex-col justify-center md:justify-end md:pb-72 md:items-end"
    >
      <div className="backdrop-blur-sm flex flex-col  md:w-2/5 md:mr-10">
        <h2>Holistisk Hälsa</h2>
        <p>
          Holistisk terapi innefattar ett helhetsgrepp som innebär att
          behandlingen fokuserar på kroppen, ditt sinne och dina känslor.
        </p>
        <p>
          Holistisk massage är väldigt individuell för varje person med hänsyn
          till ens personliga behov. Genom att använda fysisk beröring och
          specifika massagetekniker kan man lindra fysiska spänningar och
          frigöra känslomässiga blockeringar. Detta aktiverar kroppens naturliga
          förmåga att läka sig själv.
        </p>
        <p>
          Varje behandling anpassas individuellt, och vi bestämmer tillsammans
          hur många sessioner som passar bäst för dig.
        </p>
      </div>
      <img
        src="./images/holistic_image.jpg"
        alt="Image of Mudra body position"
        width="1000"
        height="200"
        className="md:hidden"
      />
    </section>
  );
}

export default SectionHolistiscHealth;
