import { useCallback } from "react";
import PropTypes from "prop-types";
import facebook from "../images/devicon_facebook.png";
import linkedin from "../images/devicon_linkedin.png";
import instagram from "../images/skill-icons_instagram.png";
import twitter from "../images/skill-icons_twitter.png";
import contact from "../images/Group17481.png";
import footerlogo from "../images/image543.png";
import logo from "../images/logofinal.png";

const FrameComponent = ({ className = "" }) => {
  const onImage543Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameHeader']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
      className={`self-stretch shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)_inset] bg-white overflow-hidden flex flex-col items-center justify-start pt-[35px] px-0 pb-[89px] box-border relative gap-[70px] max-w-full text-left text-5xl text-black font-poppins mq825:pt-[23px] mq825:pb-[58px] mq825:box-border mq450:gap-[17px] mq1275:gap-[35px] ${className}`}
    >
      <div className="w-[1677.1px] flex flex-row items-start justify-end py-0 px-[65px] box-border max-w-full mq1275:pl-8 mq1275:pr-8 mq1275:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px]">
          <div className="w-[421.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[38px] max-w-full mq450:gap-[19px]">
            <img
              className="w-[253px] h-28 relative object-cover cursor-pointer"
              alt=""
              src={logo}
              onClick={onImage543Click}
            />
            <p className="m-0 w-[361px] h-[117px] relative leading-[39px] font-medium inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[31px]">
              Tailored Knowledge Hub: Your Institute, Your Notest powerful rank
              tracker in the industry.
            </p>
          </div>
          <div className="w-[307.5px] flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="h-[42px] relative text-9xl font-medium inline-block [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                Company
              </div>
              <div className="h-9 relative font-medium inline-block mq450:text-lgi">{`Terms & Condition `}</div>
              <div className="h-9 relative font-medium inline-block mq450:text-lgi">{`Privacy Policy `}</div>
              <div className="h-9 relative font-medium inline-block mq450:text-lgi">
                Sidemap
              </div>
            </div>
          </div>
          <div className="h-80 w-[287px] flex flex-col items-start justify-start pt-[73px] px-0 pb-0 box-border text-9xl">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch h-[43px] relative font-medium inline-block shrink-0 [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                Contact
              </div>
              <div className="w-[215px] flex flex-row items-start justify-start mt-5 py-0 px-0.5 box-border text-5xl font-questrial">
                <div className="flex-1 flex flex-row items-start justify-start gap-[18.1px]">
                  <div className="h-[77.4px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                    <img
                      className="w-[22.9px] flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src={contact}
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[34px]">
                    <div className="self-stretch relative">
                      <span> </span>
                      <span className="text-lg [text-decoration:underline]">
                        +91 9998317523
                      </span>
                    </div>
                    <u className="h-[25px] relative text-lg [text-decoration:underline] inline-block shrink-0 whitespace-nowrap">
                      info@eduwol.com
                    </u>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[222px] flex flex-col items-start justify-start pt-[73px] px-0 pb-0 box-border text-9xl">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 pb-[27.6px] px-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[59px] shrink-0 [debug_commit:69da668]">
                <div className="self-stretch h-[43px] relative font-medium inline-block shrink-0 [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                  Get In Touch
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                  <div className="flex flex-row items-start justify-start gap-[17.3px]">
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px] cursor-pointer"
                      alt=""
                      src={facebook}
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px] cursor-pointer"
                      alt=""
                      src={linkedin}
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px] cursor-pointer"
                      alt=""
                      src={instagram}
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px] cursor-pointer"
                      alt=""
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[2]" />
  <div className="self-stretch mt-10 h-0.5 relative box-border border-t-[2px] border-solid border-silver-200" />
  <div className="w-full  absolute !m-[0] bottom-[10px] leading-[82px] flex items-center justify-center font-questrial text-center inline-block mq450:text-lgi mq450:leading-[66px]">
    © 2024 Copyright@Utsav : eduwol.com
  </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
