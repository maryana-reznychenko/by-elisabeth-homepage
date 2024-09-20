import ButtonCTA from "../components/ButtonCTA";
import Services from "../components/Services";

import { services } from "../data/services_data.json";

function SectionServices() {
  return (
    <section id="behandlingar" className="h-full flex flex-col justify-center ">
      <h2>Behandlingar</h2>
      <h3>här får du hitta allt vad skulle du behöva för din kropp och själ</h3>
      <Services data={services} />

      <div className="bg-[#576A5F] p-5 md:p-10 rounded-b-[30%] md:rounded-none ">
        <ButtonCTA />
      </div>
    </section>
  );
}
export default SectionServices;
