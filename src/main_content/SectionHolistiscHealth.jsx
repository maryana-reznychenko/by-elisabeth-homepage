function SectionHolistiscHealth() {
  return (
    <section
      // style={{
      //   backgroundImage: 'url("./images/holistic_image.jpg")',
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right top",
      // }}
      // className="bg-cover z-0 flex flex-col justify-center md:justify-end md:pb-72 md:items-end "
      className="bg-none md:bg-[url('./images/holistic_image.jpg')] md:bg-cover md:bg-no-repeat md:bg-right-top z-0 flex flex-col justify-center md:justify-end md:pb-72 md:items-end"
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
        width="full"
        height="200"
        className="md:hidden"
      />
    </section>
  );
}
export default SectionHolistiscHealth;
