import FrameComponent2 from "../components/FrameComponent2";
import GroupComponent from "../pagecomponents/GroupComponent";
import GroupComponent1 from "../pagecomponents/GroupComponent1";
import FrameeComponent2 from "../pagecomponents/FrameeComponent2";
import FrameeComponent1 from "../pagecomponents/FrameeComponent1";
import FrameeComponent from "../pagecomponents/FrameeComponent";
import Searchuni from "../pagecomponents/Searchuni";
import cgcuni from "../images/cgc.png";
import chandi from "../images/chandi.png";
import shubharti from "../images/shubharti.png";
import cantfind from "../images/cantfind.png";
import FrameComponent from "../components/FrameComponent";
import { useEffect } from "react";

const Institutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden z-[0]" />
      <FrameComponent2 />
      <GroupComponent1 rectangle1431={cantfind} />
      
      <GroupComponent1
        rectangle1431={cantfind}
        propLeft="unset"
        propRight="90px"
      />
      <Searchuni />
      <section className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[70px] pb-[63px] pr-5 pl-[21px] box-border gap-[91px] max-w-full z-[1] mq450:gap-[23px] mq450:pt-5 mq450:pb-5 mq450:box-border mq900:gap-[45px] mq900:pt-[29px] mq900:pb-[27px] mq900:box-border mq1325:pt-[45px] mq1325:pb-[41px] mq1325:box-border">
        <div className="w-[1728px] h-[1664px] relative bg-whitesmoke hidden max-w-full" />
        <FrameeComponent2 />
        <div className="w-[1547px] flex flex-row items-start justify-between pt-0 px-0 pb-[52px] box-border max-w-full gap-[20px] mq900:pb-[34px] mq900:box-border mq1725:flex-wrap">
          <GroupComponent
            rectangle1431={cgcuni}
            chitkaraUniversity="CGC"
            propDisplay="inline-block"
            description="Chandigarh Group of Colleges (CGC), located in Landran, Punjab, India,
            is renowned for its academic excellence, vibrant campus life, and industry-oriented education."
            propMinWidth="70px"
          />
          <GroupComponent
            rectangle1431={chandi}
            chitkaraUniversity="Chandigarh University"
            description={` Chandigarh University, nestled in Mohali, Punjab, India,
            is recognized for its academic excellence, vibrant campus life,
            and industry-aligned programs.`}
            propDisplay="unset"
            propMinWidth="unset"
          />
          <GroupComponent
            rectangle1431={shubharti}
            chitkaraUniversity="Shubharti University"
            propDisplay="unset"
            propMinWidth="unset"
            description="Shubharti University, located in Meerut, India, offers quality education across engineering, management, law, 
            and humanities, emphasizing research."
          />
        </div>
        <FrameeComponent1 />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Institutes;