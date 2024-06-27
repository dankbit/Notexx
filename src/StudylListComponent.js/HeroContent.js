import PropTypes from "prop-types";
import studylist from "../images/StudyList.png";
import hero from "../images/chitkara.png";
import downarrow from "../images/Vector(3).png";
import stdyy from '../images/stdyyyyy.svg';

const HeroContent = ({ className = "", image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${stdyy})` }}
      className={`ml-[-2272px] h-[888px] w-[1728px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[361px] px-0 pb-[375px] box-border gap-[289px] bg-cover bg-no-repeat bg-[top] mix-blend-luminosity min-w-[1728px] [debug_commit:0448091] max-w-full z-[1] text-center text-81xl text-white font-questrial mq450:gap-[72px] mq450:pt-[99px] mq450:pb-[103px] mq450:box-border mq450:min-w-full mq900:gap-[144px] mq900:pt-[153px] mq900:pb-[159px] mq900:box-border mq900:min-w-full mq1325:pt-[235px] mq1325:pb-[244px] mq1325:box-border mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full ${className}`}
    >
      <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <div className="flex flex-col items-end justify-start gap-[23px] shrink-0 [debug_commit:0448091] max-w-full">
          <div className="flex flex-row items-start justify-end py-0 pr-[72px] pl-[76px] mq900:pl-[38px] mq900:pr-9 mq900:box-border">
            <h1 className="m-0 relative text-inherit tracking-[0.04em] font-normal font-inherit [backdrop-filter:blur(100px)] [-webkit-text-stroke:3px_#fff] mix-blend-normal mq450:text-11xl mq900:text-31xl">
              Studylist
            </h1>
          </div>
          <div className="relative text-5xl mq450:text-lgi">
            Get into our curated study list: To find your favourites.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1055px] flex flex-col items-end justify-start gap-[47px] shrink-0 [debug_commit:0448091] mq450:gap-[23px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px]">
          <img
            className="h-[34px] w-[71px] relative"
            alt=""
            src={stdyy}
          />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-[21px] px-0 z-[1]">
          <div className="h-[103px] w-[124px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative">
            <div className="h-[976px] w-[1735px] absolute !m-[0] right-[-1611px] bottom-[-875px] bg-white z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default HeroContent;
