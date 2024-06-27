import React from 'react';
import FrameComponent from "../components/FrameComponent";
import HeroContent from "../StudylListComponent.js/HeroContent";
import ItemContent from "../StudylListComponent.js/ItemContent";
import FrameComponent2 from "../components/FrameComponent2";
import StudyList from "../images/StudyList.png";
import folder from "../images/studylistfolder.png";

const StudyListPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[70px] mix-blend-normal leading-[normal] tracking-[normal] text-left text-31xl text-black font-questrial mq450:gap-[17px] mq900:gap-[35px]">
      <div className="self-stretch h-[906px] relative [transform:_rotate(-180deg)] hidden" />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent2 />
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-[2269px]  gap-[544px] max-w-full mq450:gap-[68px] mq450:pl-5 mq450:box-border mq900:gap-[136px] mq900:pl-[567px] mq900:box-border mq1325:gap-[272px] mq1325:pl-[1134px] mq1325:box-border mq1725:flex-wrap"
          style={{
            backgroundImage: `url(${StudyList})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <HeroContent />
          <div className="h-[700px] w-[957px] flex flex-col items-start justify-start pt-[130px] px-0 pb-0 box-border min-w-[957px] max-w-full shrink-0 mq450:min-w-full mq900:pt-[84px] mq900:box-border mq900:min-w-full mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full">
            <div className="self-stretch flex-1 relative rounded-[20px] opacity-[0.5] shrink-0 [debug_commit:0448091] border-[2px] border-solid border-gold" />
          </div>
        </div>
      </section>
      <div className="w-[730px] flex flex-row items-start justify-center pt-0 px-5 pb-[72px] box-border max-w-full mq450:pb-[47px] mq450:box-border">
        <div className="w-[548px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[32px] mq900:gap-[65px]">
          <h1 className="m-0 self-stretch relative text-32xl tracking-[0.04em] font-normal font-inherit mq450:text-11xl mq900:text-[40px]">
            Your Study-list
          </h1>
          <div className="w-[411px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[229px] flex flex-col items-start justify-start gap-[54px]">
              <ItemContent twemojifileFolder={folder} />
              <ItemContent twemojifileFolder={folder} />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default StudyListPage;
