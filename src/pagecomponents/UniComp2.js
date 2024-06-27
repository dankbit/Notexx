import PropTypes from "prop-types";
import UniComp from "./UniComp";
import unipic from "../images/addunipic.png";

const UniComp2 = ({ className = "" }) => {
  return (
    <section className={`self-stretch flex flex-row items-start justify-end py-0 pr-3 pl-0.5 box-border max-w-full text-left text-4xl text-darkslateblue font-questrial ${className}`}>
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center gap-8 max-w-full text-9xl text-darkslategray mq825:gap-4">
          <img className="w-[676px] relative max-h-full object-cover max-w-full mq1400:flex-1" loading="lazy" alt="" src={unipic} />
          <div className="flex-1 flex flex-col items-start justify-start gap-[71px] min-w-[562px] max-w-full lg:gap-[35px] mq825:min-w-full mq450:gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <div className="relative tracking-[0.01em] leading-[82px] mq450:text-3xl mq450:leading-[66px]">Fill out the form and let us know what we are missing</div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[61px] max-w-full text-3xl text-dimgray lg:gap-[30px] mq450:gap-[15px]">
              <UniComp yourName="Your Name" collegeFieldPlaceholder="Your College Name" />
              <div className="w-[814px] flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full">
                <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-start pt-6 px-[30px] pb-[13px] max-w-full border-[1px] border-solid border-darkgray">
                  <div className="h-20 w-[732px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
                  <input className="w-[219px] [border:none] [outline:none] font-questrial text-3xl bg-[transparent] h-[39.6px] relative text-dimgray text-left inline-block p-0 z-[1] mq450:text-lg" placeholder="College Address" type="text" />
                </div>
              </div>
              <UniComp yourName="Your Phone No." collegeFieldPlaceholder="Your E-mail" propGap="178px" propWidth="224px" propWidth1="226px" propWidth2="173px" propHeight="51px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UniComp2.propTypes = {
  className: PropTypes.string,
};

export default UniComp2;
