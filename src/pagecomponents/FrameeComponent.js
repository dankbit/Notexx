import PropTypes from "prop-types";

const FrameeComponent = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white overflow-hidden flex flex-col items-end justify-start pt-[35px] px-0.5 pb-[91px] box-border relative gap-[205px] max-w-full z-[3] text-left text-5xl text-black font-poppins mq450:gap-[51px] mq900:gap-[102px] mq900:pt-[23px] mq900:pb-[59px] mq900:box-border ${className}`}
    >
      <div className="w-[1677.1px] flex flex-row items-start justify-end py-0 px-[65px] box-border max-w-full mq1325:pl-8 mq1325:pr-8 mq1325:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-between max-w-full gap-[20px]">
          <div className="w-[423.5px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border max-w-full">
            <div className="w-[361px] flex flex-col items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
              <img
                className="w-[253px] h-28 relative object-cover"
                alt=""
                src="/image-543-1@2x.png"
              />
              <p className="m-0 self-stretch relative leading-[39px] font-medium mq450:text-lgi mq450:leading-[31px]">
                Tailored Knowledge Hub: Your Institute, Your Notest powerful
                rank tracker in the industry.
              </p>
            </div>
          </div>
          <div className="w-[308.5px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative text-9xl font-medium [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                Company
              </div>
              <div className="relative font-medium mq450:text-lgi">{`Terms & Condition `}</div>
              <div className="relative font-medium mq450:text-lgi">{`Privacy Policy `}</div>
              <div className="relative font-medium inline-block min-w-[110px] mq450:text-lgi">
                Sidemap
              </div>
            </div>
          </div>
          <div className="h-[217px] w-[287px] flex flex-col items-start justify-start text-9xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
              <div className="self-stretch relative font-medium [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                Contact
              </div>
              <div className="w-[244px] flex flex-row items-start justify-start py-0 px-px box-border text-5xl font-questrial">
                <div className="flex-1 flex flex-row items-end justify-start gap-[18.1px]">
                  <img
                    className="h-[72.8px] w-[22.9px] relative shrink-0 [debug_commit:69da668]"
                    loading="lazy"
                    alt=""
                    src="/group-17481.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[34px] shrink-0 [debug_commit:69da668]">
                      <div className="w-[170px] relative inline-block">
                        <span> </span>
                        <span className="text-lg [text-decoration:underline]">
                          +91 70153 93351
                        </span>
                      </div>
                      <u className="self-stretch relative text-lg [text-decoration:underline] whitespace-nowrap">
                        info@eduwol.com
                      </u>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[218px] w-[222px] flex flex-col items-start justify-start text-9xl">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 pb-[27.6px] px-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[49px] shrink-0 [debug_commit:69da668]">
                <div className="self-stretch relative font-medium [-webkit-text-stroke:1px_#000] mq450:text-3xl">
                  Get In Touch
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                  <div className="flex flex-row items-start justify-start gap-[17.3px]">
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px]"
                      loading="lazy"
                      alt=""
                      src="/deviconfacebook.svg"
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px]"
                      loading="lazy"
                      alt=""
                      src="/deviconlinkedin.svg"
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px]"
                      loading="lazy"
                      alt=""
                      src="/skilliconsinstagram.svg"
                    />
                    <img
                      className="h-[28.4px] w-[26.5px] relative overflow-hidden shrink-0 min-h-[28px]"
                      loading="lazy"
                      alt=""
                      src="/skilliconstwitter.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1725px] absolute !m-[0] right-[-4px] bottom-[11px] leading-[82px] font-questrial text-center inline-block mq450:text-lgi mq450:leading-[66px]">
        © 2019-2024 Copyright Roadixo Industries LLP : eduwol.com
      </div>
      <div className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[2]" />
      <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-silver-200" />
    </footer>
  );
};

FrameeComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameeComponent;