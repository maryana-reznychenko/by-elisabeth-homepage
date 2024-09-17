import { LazyLoadImage } from "react-lazy-load-image-component";
import Elisabeth_photo from "../assets/Elisabeth_photo.webp";
import ButtonCTA from "../components/ButtonCTA";
import Logo from "../../public/logo/LogoDark.svg";
import scrollToTheTop from "../helpers/scrollToTheTop";

function SectionAbout() {
  return (
    <section id="about" className="flex flex-col lg:px-48">
      <h2>Om Mig</h2>
      <h3>Hejsan och varmt välkommen hit!</h3>
      <div className="w-auto h-auto pb-5 ">
        <LazyLoadImage
          src={Elisabeth_photo}
          alt="Elisabeth's original photo"
          width="300"
          height="400"
          loading="lazy"
          className="lg:h-[533px] lg:w-[400px] m-auto object-cover shadow-lg shadow-[#1f3433]/50 rounded-xl "
        />
      </div>
      <p>
        Jag heter Elisabeth, och det gläder mig att du har hittat till{" "}
        <strong>Skönhet och Hälsa</strong>.
      </p>
      <p>
        Med över 20 års erfarenhet som hudterapeut och massör, samt de senaste
        tre åren som musikterapeut, utför jag behandlingen inriktat för
        människan att må bättre.
      </p>
      <p>
        På Skönhet och Hälsa tror jag att äkta välmående handlar om att skapa en
        harmonisk balans mellan kropp, sinne och själ. Min filosofi är rotad i
        holistisk hälsa, där varje behandling är utformad för att stödja och
        stärka hela dig.
      </p>
      <p>
        Jag anpassar varje session utifrån dina behov, oavsett om du behöver
        lindra spänningar, återhämta dig från stress, eller bara längtar efter
        en stund av stillhet och ro. Jag finns här för att vägleda dig på din
        väg mot inre balans och harmoni.
      </p>
      <p>
        Välkommen att uppleva den holistiska hälsans kraft där varje beröring
        inte bara läker kroppen, utan även lyfter själen.
      </p>
      <h4>Du är alltid välkommen att boka en tid hos mig</h4>
      <div className="w-screen lg:-mx-48 bg-[#576A5F] py-5 md:py-10 rounded-b-[30%] md:rounded-none ">
        <ButtonCTA />
      </div>

      <div className="m-auto md:ml-5 py-10 ">
        <p className="m-0 p-0">Varma hälsningar,</p>
        <img
          src={Logo}
          alt="Company Logo"
          width="300"
          height="50"
          onClick={scrollToTheTop}
        />
      </div>
    </section>
  );
}
export default SectionAbout;
