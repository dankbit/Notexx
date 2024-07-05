import { useCallback } from "react";
import PropTypes from "prop-types";
import downarrow from "../images/downarrow.png";

const HeroSection2 = ({ className = "", backgroundImage }) => {
  const onImageClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start py-0 px-0 box-border gap-[541px] shrink-0 max-w-full text-center text-81xl text-white font-questrial mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[1728px] flex flex-col items-end justify-start min-w-[1728px] shrink-0 max-w-full mq450:min-w-full mq900:min-w-full mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[364px] px-[479px] pb-9 box-border gap-[313px] max-w-full z-[1] mt-[-2px] mq450:gap-[78px] mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border mq900:gap-[156px] mq900:pl-[239px] mq900:pr-[239px] mq900:pb-[23px] mq900:box-border">
          {/* <div className="w-[753px] flex flex-col items-end justify-start gap-[16px] max-w-full"> */}
            {/* <div className="w-[735px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[537px] relative text-inherit tracking-[0.04em] font-normal font-inherit flex items-center justify-center [backdrop-filter:blur(100px)] [-webkit-text-stroke:3px_#fff] mix-blend-normal max-w-full mq450:text-11xl mq900:text-31xl">
                Downloads
              </h1>
            </div> */}
            {/* <div className="self-stretch relative text-5xl tracking-[0.04em] mq450:text-lgi">
              Unlock the vault of your downloaded documents here.
            </div> */}
          {/* </div> */}
          {/* <div className="w-[753px] flex flex-row items-start ml-20 justify-center max-w-full">
            <img
              className="h-[34px] w-[71px] relative"
              loading="lazy"
              alt=""
              src={downarrow}
            />
          </div> */}
        </div>
      </div>
      <div className="h-[760px] w-[957px] flex flex-col items-start justify-start min-w-[957px] max-w-full shrink-0 mq1325:min-w-full mq1725:flex-1">
        <div className="self-stretch h-[570px] relative rounded-xl box-border opacity-[0.5] shrink-0 border-[2px] border-solid border-gold" />
      </div>
    </section>
  );
};

HeroSection2.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSection2;
