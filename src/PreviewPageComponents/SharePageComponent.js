import PropTypes from "prop-types";
import facebook from "../images/devicon_facebook.png";
import insta from "../images/skill-icons_instagram.png";
import whatsapp from "../images/logos_whatsapp-icon.png";
import twitter from "../images/skill-icons_twitter.png";

const SharePageComponent = ({ className = "" }) => {
  

  return (
    <div
      className={`w-full bg-white overflow-hidden flex flex-col items-start justify-start pt-[33px] px-[30px] pb-[39px] box-border gap-[23px] leading-[normal] tracking-[normal] text-left text-lgi text-dimgray font-questrial ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[14px] max-w-full text-left text-[26px] text-black font-questrial">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[220px] flex flex-col items-start justify-start gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <a className="[text-decoration:none] relative text-darkslategray-100 font-semibold text-10xl mq450:text-[21px]">
                Share Document
              </a>
              <div className="relative text-[18px] text-dimgray">
                Share on social media
              </div>
            </div>
            <a className="[text-decoration:none] relative text-lgi text-dimgray-300 inline-block min-w-[91px]">
              Share URL
            </a>
          </div>
          
        </div>
        <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-between py-0 pr-0.1 pl-3.5 max-w-full gap-[25px] text-mini text-gray-200 border-[1px] border-solid border-darkgray mq600:flex-wrap">
          <div className="self-stretch w-[639px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
            <div className="relative z-[1]">
              https://www.docswol.com/in/z/404442312?vwt=01675423561
            </div>
          </div>
          <button className="cursor-pointer py-[11px] px-6 bg-gainsboro w-[100px]  box-border flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-darkgray hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
            <div className="h-[41px] w-[90px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-gainsboro box-border hidden border-[1px] border-solid border-darkgray" />
            <div className="relative text-mini font-questrial text-black  text-left inline-block min-w-[36px] z-[2]">
              Copy
            </div>
          </button>
        </div>
      </section>
      <div className="w-[227px] flex flex-col items-start justify-start gap-[16px]">
        <div className="relative">Share on social media</div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="lazy"
            alt=""
            src={facebook}
          />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="lazy"
            alt=""
            src={insta}
          />
          <img
            className="h-[30.5px] w-[30.5px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={whatsapp}
          />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="lazy"
            alt=""
            src={twitter}
          />
        </div>
      </div>
      {/* <div className="self-stretch flex flex-row items-start justify-end py-0 px-[7px] text-darkslateblue">
        <div
          className="relative inline-block min-w-[48px] cursor-pointer"
        >
          Close
        </div>
      </div> */}
    </div>
  );
};

SharePageComponent.propTypes = {
  className: PropTypes.string,
};


export default SharePageComponent;