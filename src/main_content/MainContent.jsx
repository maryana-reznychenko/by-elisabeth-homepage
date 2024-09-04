import SectionHolistiskHealth from "../main_content/SectionHolistiskHealth";
import SectionTreatments from "../main_content/SectionTreatments";
import SectionPrices from "../main_content/SectionPrices";
import SectionVisitRules from "../main_content/SectionVisitRules";
import SectionAbout from "../main_content/SectionAbout";

function MainContent() {
  return (
    <main>
      <h1>En stund för dig med holistisk massage i centrala Stockholm</h1>
      <SectionHolistiskHealth />
      <SectionTreatments />
      <SectionPrices />
      <SectionVisitRules />
      <SectionAbout />
    </main>
  );
}
export default MainContent;
