import ButtonOnScroll from "../components/ButtonOnScroll";
import ButtonCTA from "../components/ButtonCTA";

const SectionHero = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2)), url("./images/bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
      className="md:bg-fixed bg-cover bg-font-inactive h-lvh pt-5 px-5 lg:px-48 flex flex-col justify-center items-center lg:items-start overflow-auto text-font-light"
    >
      <h1>
        Holistisk massage på <strong>Sönhet och Hälsa</strong> i centrala
        Stockholm
      </h1>

      <h2 className="hidden md:block lg:text-left normal-case lg:mr-32">
        Behandlingen för dig som vill uppnå djup avkoppling i kroppen och hitta
        harmony i själlan
      </h2>
      <div className="pt-10 sm:pt-5 flex flex-col align-baseline  lg:flex-row gap-10 ">
        <ButtonOnScroll />
        <ButtonCTA />
      </div>
    </section>
  );
};

export default SectionHero;
