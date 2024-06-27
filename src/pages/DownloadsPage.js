import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import HeroSection2 from "../DownloadComponents/HeroSection2";

const DownloadsPage = () => {
  const onImageClick = useCallback(() => {
    // Please sync "preview page" to the project
  }, []);

  return (
    <div className="w-full h-[3689px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[613px] box-border mix-blend-normal leading-[normal] tracking-[normal] mq1725:h-auto">
      <div className="self-stretch h-[1102px] relative [transform:_rotate(-180deg)] hidden" />
      <div className="w-6 h-6 relative hidden" />
      <HeroSection2 />
      <section className="ml-[-8px] self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-24 px-[90px] pb-[561px] box-border gap-[62px] shrink-0 max-w-full z-[2] text-left text-17xl text-black font-questrial mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[31px] mq900:pt-[26px] mq900:px-[45px] mq900:pb-[154px] mq900:box-border mq1325:pt-10 mq1325:pb-[237px] mq1325:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-center text-31xl">
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-11xl mq900:text-[40px]">
            Your Downloads
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[102px] box-border gap-[27.3px] max-w-full mq900:pb-[66px] mq900:box-border">
          <div className="self-stretch h-[66.7px] relative">
            <h3 className="m-0 absolute top-[0px] left-[6px] text-inherit font-normal font-inherit inline-block w-[386px] h-[37px] mq450:text-3xl mq900:text-10xl">
              Documents
            </h3>
            <div className="absolute top-[29px] left-[920px] w-72 flex flex-row items-start justify-between gap-[20px] text-center text-7xl text-dimgray">
              <div className="relative inline-block min-w-[54px] mq450:text-2xl">
                Year
              </div>
              <div className="relative inline-block min-w-[84px] mq450:text-2xl">
                Upvote
              </div>
            </div>
            <div className="absolute top-[66px] left-[0px] box-border w-[1547.7px] h-[0.7px] border-t-[0.7px] border-solid border-dimgray" />
          </div>
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
        <div className="w-[1002px] flex flex-col items-start justify-start gap-[90px] max-w-full mq900:gap-[22px] mq1325:gap-[45px]">
          <h3 className="m-0 w-72 relative text-inherit font-normal font-inherit inline-block mq450:text-3xl mq900:text-10xl">
            Books
          </h3>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[907px] flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
              <div className="h-[590px] w-[364px] relative min-h-[590px] max-w-full cursor-pointer flex items-center justify-center">
                <img
                  className="h-full w-full cursor-pointer object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
                  loading="lazy"
                  alt=""
                  src="/image-573@2x.png"
                  onClick={onImageClick}
                />
              </div>
              <div className="h-[590px] w-[364px] relative min-h-[590px] max-w-full flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
                  loading="lazy"
                  alt=""
                  src="/image-574@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default DownloadsPage;