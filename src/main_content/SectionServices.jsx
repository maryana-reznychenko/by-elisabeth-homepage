import ButtonCTA from "../components/ButtonCTA";
import Services from "../components/Services";
import { services } from "../data/services_data.json";
import TreatmentCard from "../components/TreatmentCard";

function SectionServices() {
  return (
    <section className="h-full flex flex-col justify-center">
      <h2>Behandlingar</h2>
      <h3>här får du hitta allt vad skulle du behöva för din kropp och själ</h3>
      <Services data={services} />
      {/* <TreatmentCard /> */}
      <div className=" bg-font-main p-5 md:p-10 rounded-b-[30%] md:rounded-b-[50%] ">
        <ButtonCTA />
      </div>
    </section>
  );
}
export default SectionServices;
