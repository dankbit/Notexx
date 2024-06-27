import Uniheader from "../pagecomponents/Uniheader";
import { useLocation, useParams } from "react-router-dom";
import UniComp3 from "../pagecomponents/UniComp3";
import MoreNotes from "../pagecomponents/MoreNotes";
import UniComp5 from "../pagecomponents/UniComp5";
import NotesCardContainer from "../pagecomponents/NotesCardContainer";
import ShowMoreCoursesContainer from "../pagecomponents/ShowMoreCoursesContainer";
import UniComp6 from "../pagecomponents/UniComp6";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import course1 from "../images/Courses1.png";
import { useEffect } from "react";

const UniversityPage = () => {
    const { name } = useParams();
    const { state } = useLocation();
    const university = state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


      const universityCourses = [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Operating Systems",
        // Add more courses as needed
      ];

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start mix-blend-normal leading-[normal] tracking-[normal]">
      <div className="w-6 h-6 relative hidden" />
      <FrameComponent2 />
      <section className="self-stretch ml-8 flex flex-row items-end justify-start pt-0 pb-[30px] px-0 box-border gap-[541px] max-w-full mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap">
        <div className="w-[1728px] ml-20 flex flex-col items-start justify-start gap-[101px] min-w-[1728px] shrink-0 [debug_commit:0448091] max-w-full mq450:gap-[25px] mq450:min-w-full mq900:gap-[50px] mq900:min-w-full mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full">
        <Uniheader universityname={name || university.name} 
        courses={universityCourses}
        />

          <UniComp3 />
        </div>
        <div className="h-[663px] w-[957px] flex flex-col items-start justify-start min-w-[957px] max-w-full shrink-0 mq1325:min-w-full mq1725:flex-1">
          <div className="self-stretch h-[570px] relative rounded-[20px] box-border opacity-[0.5] shrink-0 [debug_commit:0448091] border-[2px] border-solid border-gold" />
        </div>
      </section>
      <MoreNotes />
      <div className="w-6 h-6 relative hidden" />
      <UniComp5 />
      <NotesCardContainer />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[83px] pr-6 pl-5 box-border max-w-full text-center text-20xl text-black font-questrial mq900:pb-[54px] mq900:box-border">
        <div className="w-[1544px] flex flex-col items-start justify-start gap-[41px] max-w-full mq900:gap-[20px]">
          <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-4xl mq900:text-12xl">
            Courses
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1725:flex-wrap mq1725:justify-center">
              <img
                className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
                loading="lazy"
                alt=""
                src={course1}
              />
              <img
                className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
                loading="lazy"
                alt=""
                src={course1}
              />
              <img
                className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
                loading="lazy"
                alt=""
                src={course1}
              />
              <img
                className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
                loading="lazy"
                alt=""
                src={course1}
              />
            </div>
          </div>
        </div>
      </section>
      <ShowMoreCoursesContainer />
      <UniComp6 />
      <FrameComponent />
    </div>
  );
};

export default UniversityPage;