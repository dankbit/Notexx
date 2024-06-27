import { useMemo } from "react";
import PropTypes from "prop-types";

const RecentItem = ({
  className = "",
  recentitem,
  iondocuments,
  mdilike,
  phdotsThreeCircleVertical,
  propAlignSelf,
  propFlex,
  propGap,
}) => {
  const recentItemStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const recentCardStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-7xl text-darkslateblue font-questrial mq1325:flex-wrap ${className}`}
      style={recentItemStyle}
    >
      <div
        className="flex flex-row items-end justify-start py-0 pr-[203px] pl-0 box-border gap-[24px] max-w-full mq450:pr-5 mq450:box-border mq900:flex-wrap mq900:pr-[101px] mq900:box-border"
        style={recentCardStyle}
      >
        <img
          className="h-[123px] w-[179px] relative rounded-17xl object-cover mq900:flex-1"
          loading="lazy"
          alt=""
          src={recentitem}
        />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border min-w-[198px] mq900:flex-1">
          <div className="flex flex-col items-start justify-start gap-[31px]">
            <div className="relative mq450:text-2xl">Final DSA Report</div>
            <div className="flex flex-row items-start justify-start gap-[6px] text-dimgray-200 font-poppins">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
                  alt=""
                  src={iondocuments}
                />
              </div>
              <div className="relative inline-block min-w-[118px] mq450:text-2xl">
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
                src={mdilike}
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
          src={phdotsThreeCircleVertical}
        />
      </div>
    </div>
  );
};

RecentItem.propTypes = {
  className: PropTypes.string,
  screenshot202402061713235: PropTypes.string,
  iondocuments: PropTypes.string,
  mdilike: PropTypes.string,
  phdotsThreeCircleVertical: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
};

export default RecentItem;