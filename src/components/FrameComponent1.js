import { useCallback } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const onGetStartedText2Click = useCallback(() => {
    // Please sync "Sign Up Page" to the project
  }, []);

  return (
    <section
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[100px] px-48 pb-[193.5px] box-border gap-[17px] max-w-full text-left text-45xl text-black font-questrial mq825:pt-16 mq825:pb-[82px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pt-[99px] mq1275:px-24 mq1275:pb-[126px] mq1275:box-border ${className}`}
    >
      <div className="w-[993px] flex flex-col items-start justify-start max-w-full mb-3">
        <h1 className=" mb-10 w-[864px] h-7 relative text-inherit leading-[28px] font-normal font-inherit flex items-center shrink-0 mix-blend-luminosity max-w-full mq825:text-32xl mq825:leading-[22px] mq450:text-19xl mq450:leading-[17px]">
          One platform
        </h1>
        <h3 className="m-0 self-stretch h-[50px] relative text-17xl leading-[50px] font-normal font-inherit inline-block shrink-0 mix-blend-luminosity mt-[-16px] mq825:text-10xl mq825:leading-[40px] mq450:text-3xl mq450:leading-[30px]">
          To keep your notes organized, and your life simplified.
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-17xl mq1575:flex-wrap">
        <div className="w-96 flex flex-col items-start justify-start gap-[92px] max-w-full mq450:gap-[46px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-black" />
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-black" />
              </div>
              <h3 className="m-0 self-stretch h-[37px] relative text-inherit font-normal font-inherit inline-block shrink-0 mix-blend-normal mq825:text-10xl mq450:text-3xl">
                Unlimited Courses
              </h3>
            </div>
            <p className="m-0 self-stretch h-[170px] relative text-5xl leading-[34px] inline-block mq450:text-lgi mq450:leading-[27px]">
              Gain Effortless access to an extensive array of courses, expanding
              your knowledge without boundaries, all at your fingertips with
              eduwol.
            </p>
          </div>
          <button
            className="cursor-pointer border-none font-semi-bold text-lg pt-[22.5px] px-[19px] pb-[23.4px] w-[223.5px] flex items-center justify-center box-border relative whitespace-nowrap z-[1] rounded bg-gray-200 text-white transition-colors duration-300"
            onClick={onGetStartedText2Click}
          >
            Get started
          </button>
        </div>
        <div className="w-96 flex flex-col items-start justify-start gap-[47px] max-w-full mq450:gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
            <h3 className="m-0 self-stretch h-[37px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq825:text-10xl mq450:text-3xl">
              <p className="m-0">Different Universities</p>
            </h3>
          </div>
          <div className="self-stretch h-[136px] relative text-5xl leading-[34px] whitespace-pre-wrap inline-block mq450:text-lgi mq450:leading-[27px]">{`Experience different notes from different universities offers a unique blend of expertise, enriching your learning journey.  `}</div>
        </div>
        <div className="w-96 flex flex-col items-start justify-start gap-[47px] max-w-full mq450:gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
            <h3 className="m-0 self-stretch h-[37px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq825:text-10xl mq450:text-3xl">
              Create Studylist
            </h3>
          </div>
          <p className="m-0 self-stretch h-[136px] relative text-5xl leading-[34px] inline-block mq450:text-lgi mq450:leading-[27px]">
            Crafting a study list is vital for productivity with NoteWol, you
            can create a study list where you can find your notes on your
            fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;