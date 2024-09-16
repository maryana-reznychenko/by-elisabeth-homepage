import SectionHero from "./SectionHero";
import SectionHolistiscHealth from "../main_content/SectionHolistiscHealth";
import SectionServices from "../main_content/SectionServices";
import SectionPrices from "../main_content/SectionPrices";
import SectionVisitRules from "../main_content/SectionVisitRules";
import SectionAbout from "../main_content/SectionAbout";

function MainContent() {
  return (
    <main>
      <SectionHero />
      <SectionHolistiscHealth />
      <SectionServices />
      <SectionPrices />
      <SectionVisitRules />
      <SectionAbout />
    </main>
  );
}
export default MainContent;
