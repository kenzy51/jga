import "./NewMain.css";
import { News } from "./news";
import { FinReport } from "./finReport";
import { SliderBlock } from "./sliderBlock";
import { OurMission } from "./ourMission";
import { Advantages } from "./advantages";
import { OurProjects } from "./OurProjects";

const NewMainLayout = () => {
  return (
    <div>
      <SliderBlock />
      <OurMission />
      <Advantages />
      <OurProjects />
      <FinReport />
      <News />
    </div>
  );
};

export default NewMainLayout;
