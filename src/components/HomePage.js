import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import Hero from "../components/Hero";
import FrameComponent1 from "../components/FrameComponent1";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";

const HomePage = () => {
  const onGetStartedText1Click = useCallback(() => {
    // Please sync "Sign Up Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-500 flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <Hero />
      <FrameComponent1 />
      <Component />
      <section className="self-stretch bg-darkslategray overflow-hidden flex flex-col items-center justify-start pt-[120px] pb-[89.5px] pr-5 pl-[23px] box-border max-w-full text-center text-[70px] text-white font-questrial mq450:pt-[78px] mq450:pb-[58px] mq450:box-border">
        <h1 className="m-0 mb-20 w-[1365px] h-[82px] relative text-inherit leading-[82px] font-normal font-inherit inline-block shrink-0 max-w-full mq825:text-[56px] mq825:leading-[66px] mq450:text-[42px] mq450:leading-[49px]">
          <span className="tracking-[0.01em]">{`Seize your voyage of notes with `}</span>
          NoteX
        </h1>
        <div className="w-[1365px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full mt-[-38px]">
          <button className="cursor-pointer [border:none] pt-[22.5px] pb-[23.4px] pr-[18px] pl-[19px] bg-[transparent] w-[223px] flex flex-row items-start justify-start box-border relative whitespace-nowrap">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0.5px] bottom-[0px] left-[0px] rounded bg-gray-400" />
            <div
              className="flex-1 relative text-5xl  leading-[28px] font-outfit text-white text-center cursor-pointer z-[1]"
              onClick={onGetStartedText1Click}
            >
              Get started
            </div>
          </button>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default HomePage;