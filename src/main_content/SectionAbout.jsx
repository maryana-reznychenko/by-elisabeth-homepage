import { LazyLoadImage } from "react-lazy-load-image-component";
import Elisabeth_photo from "../assets/Elisabeth_photo.webp";
import ButtonCTA from "../components/ButtonCTA";

function SectionAbout() {
  return (
    <section>
      <h2>Om Mig</h2>
      <h3>Hejsan och varmt välkommen hit!</h3>
      <div className="w-auto h-auto ">
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
        Jag heter Elisabeth, och det gläder mig att du har hittat till Skönhet
        och Hälsa.
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
      <div>
        <h3>Du är alltid välkommen att boka en tid hos mig </h3>
        <ButtonCTA />
      </div>
      <div>
        <p>Varma hälsningar,</p>
      </div>
      <p>Skönhet och Hälsa</p>
      <p>by Elisabeth</p>
    </section>
  );
}
export default SectionAbout;
