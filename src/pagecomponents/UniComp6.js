import ShowNotes from "./ShowNotes";
import PropTypes from "prop-types";
import dsa1img from "../images/dsa1img.png";
import doc from "../images/ion_documents.png";
import like from "../images/mdi_like.png";
import threedots from "../images/threedots.png";

const UniComp6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[109px] pr-[21px] pl-5 box-border max-w-full text-center text-7xl text-black font-questrial mq900:pb-[71px] mq900:box-border ${className}`}
    >
      <div className="w-[1547px] flex flex-col items-start justify-start gap-[29.3px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-px text-20xl">
          <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-4xl mq900:text-12xl">{`Practicals `}</h3>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[27px] max-w-full text-dimgray-200">
          <div className="w-[973px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[293px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[54px] mq450:text-2xl">
                Year
              </div>
              <div className="relative inline-block min-w-[84px] mq450:text-2xl">
                Upvote
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[8.7px] box-border max-w-full gap-[20px] text-darkslateblue mq1325:flex-wrap">
          <div className="flex flex-row items-start justify-start py-0 pr-[204px] pl-0 box-border gap-[23px] max-w-full mq450:pr-5 mq450:box-border mq900:flex-wrap mq900:pr-[102px] mq900:box-border">
            <img
              className="h-[123px] w-[179px] relative rounded-17xl object-cover mq900:flex-1"
              loading="lazy"
              alt=""
              src={dsa1img}
            />
            <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[198px] mq900:flex-1">
              <div className="flex flex-col items-start justify-start gap-[33px]">
                <div className="relative mq450:text-2xl">Final DSA Report</div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-dimgray-200">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
                      alt=""
                      src={doc}
                    />
                  </div>
                  <div className="relative inline-block min-w-[109px] mq450:text-2xl">
                    33 Pages
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[339px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-4xl text-black">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="relative inline-block min-w-[110px] mq450:text-lg">
                2024/2025
              </div>
              <div className="w-[101px] flex flex-row items-start justify-start gap-[7px] font-poppins">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-7 h-7 relative overflow-hidden shrink-0"
                    alt=""
                    src={like}
                  />
                </div>
                <div className="flex-1 relative font-light inline-block min-w-[66px] mq450:text-lg">
                  {" "}
                  None
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-10 h-10 relative overflow-hidden shrink-0"
              alt=""
              src={threedots}
            />
          </div>
        </div>
        <ShowNotes
          showMoreDocuments="Show More Documents"
          vector="/vector-5.svg"
          propWidth="unset"
          propGap="31px"
          propWidth1="unset"
          propHeight="unset"
        />
      </div>
    </section>
  );
};

UniComp6.propTypes = {
  className: PropTypes.string,
};

export default UniComp6;