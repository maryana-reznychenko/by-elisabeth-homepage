import SectionHero from "./SectionHero";
import SectionHolistiscHealth from "../main_content/SectionHolistiscHealth";
import SectionTreatments from "../main_content/SectionTreatments";
import SectionPrices from "../main_content/SectionPrices";
import SectionVisitRules from "../main_content/SectionVisitRules";
import SectionAbout from "../main_content/SectionAbout";

function MainContent() {
  return (
    <main>
      <SectionHero />
      <SectionHolistiscHealth />
      <SectionTreatments />
      <SectionPrices />
      <SectionVisitRules />
      <SectionAbout />
    </main>
  );
}
export default MainContent;
