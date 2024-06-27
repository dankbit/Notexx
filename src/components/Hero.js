import { useCallback } from "react";
import PropTypes from "prop-types";
import Image from "../images/books.png";

const Hero = ({ className = "" }) => {
  const onGetStartedTextClick = useCallback(() => {
    // Please sync "Sign Up Page" to the project
  }, []);

  return (
    <section
      className={`self-stretch [background:linear-gradient(180deg,_rgba(31,_120,_204,_0.83),_rgba(3,_6,_5,_0.88)_99.99%,_#020403)] flex flex-row items-start justify-start pt-[91px] pb-[102px] pr-[86px] pl-[91px] box-border gap-[70px] max-w-full text-left text-53xl text-silver-100 font-questrial mq450:gap-[17px] mq450:pt-[38px] mq450:px-5 mq450:pb-[43px] mq450:box-border mq1275:gap-[35px] mq1275:pt-[59px] mq1275:pb-[66px] mq1275:pr-[43px] mq1275:pl-[45px] mq1275:box-border mq1575:flex-wrap ${className}`}
    >
      <div className="h-[916px] w-[1728px] relative [background:linear-gradient(180deg,_rgba(31,_120,_204,_0.83),_rgba(3,_6,_5,_0.88)_99.99%,_#020403)] hidden max-w-full" />
      <div className="w-[626px] flex flex-col items-start justify-start pt-[171px] px-0 pb-0 box-border min-w-[626px] max-w-full mq825:pt-[111px] mq825:box-border mq825:min-w-full mq1575:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq825:gap-[17px]">
            <h1 className="m-0 w-[571px] relative text-inherit leading-[82px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#d8e4e2,_#f1fb8e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full z-[1] mq825:text-39xl mq825:leading-[66px] mq450:text-24xl mq450:leading-[49px]">
              Craft your Library
            </h1>
            <div className="self-stretch h-[68px] relative text-5xl leading-[34px] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[27px] font-semi-bold">
              Embark your journey by curating your own library with eduwol !
            </div>
          </div>
          <button
            className="cursor-pointer border-none font-semi-bold text-lg pt-[22.5px] px-[19px] pb-[23.4px] w-[223.5px] flex items-center justify-center box-border relative whitespace-nowrap z-[1] rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
            onClick={onGetStartedTextClick}
          >
            Get started
          </button>
        </div>
      </div>
      <img
        className="h-[723px] flex-1 relative max-w-full overflow-hidden min-w-[556px] z-[1] mq825:min-w-full"
        alt=""
        src={Image}
      />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;