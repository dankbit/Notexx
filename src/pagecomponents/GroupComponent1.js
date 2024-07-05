import { useMemo } from "react";
import PropTypes from "prop-types";
import punjabuni from "../images/punjabuni.png";
import cantfind from "../images/cantfind.png";

const GroupComponent1 = ({
  className = "",
  rectangle1431,
  propLeft,
  propRight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div
      className={`w-[455px]  !m-[0] absolute bottom-[540px] left-[91px] rounded-xl bg-transparent flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border gap-[22px] max-w-full z-[2] text-left text-11xl text-gray-300 font-poppins ${className}`}
      style={groupDivStyle}
    >
      <div className="self-stretch h-[455px] relative rounded-xl bg-gray-400 hidden" />
      <img
        className="self-stretch h-[239px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[0]"
        loading="lazy"
        alt=""
        src={rectangle1431}
      />
      <div className="w-[443px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative leading-[82px] font-medium z-[1] mq450:text-lg mq450:leading-[49px] mq900:text-5xl mq900:leading-[66px]">
              Ahmedabad University
            </div>
          </div>
          <p className="m-0 self-stretch relative text-mini leading-[22px] font-medium text-black z-[1]">
            Ahmedabad University is located in Sector 14 and Sector 25 of
            Ahmedabad, spreading across an area of almost 550 acres.
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle1431: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
};

export default GroupComponent1;