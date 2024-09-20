function SectionVisitRules() {
  return (
    <section id="ditt-besok" className="relative m-auto pt-5  lg:px-48">
      <div
        style={{
          backgroundImage: 'url("./images/your_visit_image.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
        className="w-[320px] md:w-[600px] h-[300px] bg-cover rounded-r-2xl"
      ></div>
      {/* Text Section Positioned Over the Images */}
      <section className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 bg-accent-light w-[90%] lg:w-1/2 rounded-3xl pb-5 md:pb-10 md:px-10">
        <h2>Ditt besök</h2>
        <h3>Trevnad och trygghet</h3>
        <p>
          Jag vill att du känner dig bekväm och trygg under behandlingen hos
          mig. <strong>Därför ber jag dig att tänka på:</strong>
        </p>
        <p>
          • Vid mina behandlingar används essentiella oljor därför är det
          viktigt att du informerar mig om dina eventuella allergier.
        </p>
        <p> • Om du har några kroppsliga besvär informera mig om detta. </p>
        <p>
          • I fall de etiska normerna brytts under besöket, avbryter jag
          behandlingen omedelbart utan återbetalning.
        </p>
      </section>
      {/* <div className="bg-accent w-1/2 md:w-1/3 h-64 md:h-[300px] ml-auto mt-48 rounded-l-full md:rounded-full"></div> */}

      <img
        src="./images/the-figure.svg"
        alt="the green figure"
        width="250"
        height="300"
        className="mt-20 md:w-[400px] md:h-[500px] ml-auto"
      />
    </section>
  );
}
export default SectionVisitRules;
