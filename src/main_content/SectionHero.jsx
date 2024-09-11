import ButtonOnScroll from "../components/ButtonOnScroll";
import ButtonCTA from "../components/ButtonCTA";

const SectionHero = () => {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1)), url("./images/bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
      className="bg-cover bg-font-inactive h-lvh pt-5 px-5 lg:px-48 flex flex-col justify-center items-center lg:items-start overflow-auto text-font-light"
    >
      <h1>En stund för dig med holistisk massage i centrala Stockholm</h1>

      <h2 className="hidden md:block lg:text-left normal-case lg:mr-32">
        Massagebehandling för dig som vill uppnå djup avkoppling i kroppen och
        hitta harmony i själlan
      </h2>
      <div className="pt-10 sm:pt-5 flex flex-col align-baseline  lg:flex-row gap-10 ">
        <ButtonOnScroll />
        <ButtonCTA />
      </div>
    </section>
  );
};

export default SectionHero;
