import PropTypes from "prop-types";
import search from "../images/iconoir_search.svg";
import firstrec from "../images/Rectangle1419.png";



const Searchuni = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start py-0 px-0 box-border gap-[541px] max-w-full text-left text-53xl text-silver-100 font-questrial mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap ${className}`}
    >
      <div className="w-full [background:linear-gradient(180deg,_#44bd9e,_#0f2923)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[140px] px-5 pb-[223px] box-border gap-[133px] min-w-[1728px] [debug_commit:69da668] max-w-full mq450:gap-[17px] mq450:pt-[59px] mq450:pb-[94px] mq450:box-border mq450:min-w-full mq900:gap-[33px] mq900:pt-[91px] mq900:pb-[145px] mq900:box-border mq900:min-w-full mq1325:gap-[66px] mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full">
        <div className="w-[1028px] flex flex-row items-start justify-center py-[73px] pr-5 pl-[21px] box-border relative max-w-full">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            
            alt=""
            src={firstrec}
          />
          <h1 className="m-0 relative text-inherit leading-[72px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90.01deg,_#000,_#41b496)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-24xl mq450:leading-[43px] mq900:text-39xl mq900:leading-[58px]">
            FIND YOUR UNIVERSITY
          </h1>
        </div>
        <div className="w-[1080px] flex flex-row items-start justify-center py-0 pr-2.5 pl-0 box-border max-w-full text-3xl">
          <div className="w-[576px] rounded-25xl bg-white flex flex-row items-start justify-between rounded-full py-px pr-[15px] pl-[34px] box-border gap-[20px] max-w-full z-[1] mq450:flex-wrap mq450:justify-center">
            <div className="h-[75px] w-[576px] relative rounded-25xl bg-white hidden max-w-full" />
            <img
              className="h-[22px] w-6 relative hidden"
              alt=""
              src="../images/searchuni.png"
            />
            <div className=" relative leading-[73px] z-[1] mq450:text-lg mq450:leading-[58px]">
              Search Here...
            </div>
            <div className="w-[131px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border ">
              <button className="cursor-pointer [border:none] py-[12.5px] px-[13px] bg-black self-stretch rounded-full flex flex-row flex-wrap items-start justify-start relative z-[2] hover:bg-darkslategray-200">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src={search}
                />
                <div className=" absolute !m-[0] top-[calc(50%_-_36.5px)] right-[13px] text-3xl leading-[73px] font-questrial text-white text-center inline-block min-w-[71px] mq450:text-lg mq450:leading-[58px]">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[659px] w-[957px] flex flex-col items-start justify-start min-w-[957px] max-w-full shrink-0 mq1325:min-w-full mq1725:flex-1">
        <div className="self-stretch h-[570px] relative rounded-xl box-border opacity-[0.5] shrink-0 [debug_commit:69da668] border-[2px] border-solid border-gold" />
      </div>
    </section>
  );
};

Searchuni.propTypes = {
  className: PropTypes.string,
};

export default Searchuni;