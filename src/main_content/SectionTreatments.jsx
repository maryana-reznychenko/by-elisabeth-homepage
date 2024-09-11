import ButtonCTA from "../components/ButtonCTA";
import TreatmentCard from "../components/TreatmentCard";

function SectionTreatments() {
  return (
    <section className="h-auto">
      <h2 className=" bg-accent-light">Behandlingar</h2>
      <h3 className="bg-accent-light">
        här får Du hitta allt vad skulle du behöva för din kropp och själ
      </h3>
      <div className="bg-accent-light pb-10 rounded-b-[50%] left-[20%] top-[30%]">
        <ButtonCTA />
      </div>
      <article className="w-auto h-auto">
        <TreatmentCard />
      </article>
    </section>
  );
}
export default SectionTreatments;
