import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  rectangle1431,
  chitkaraUniversity,
  propDisplay,
  propMinWidth,
  description,
  onClick,
}) => {
  const chitkaraUniversityStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      onClick={onClick} 
      className={`w-[455px] cursor-pointer rounded-xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[22px] min-w-[455px] max-w-full z-[2] text-left text-11xl text-black font-poppins mq450:pb-[30px] mq450:box-border mq900:min-w-full mq1325:flex-1 ${className}`}
    >
      <div className="self-stretch h-[455px] relative rounded-xl bg-white hidden" />
      <img
        className="self-stretch h-[239px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src={rectangle1431}
      />
      <div className="w-[443px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div
              className="relative leading-[82px] font-bold text-3xl z-[1] mq450:text-lg mq450:leading-[49px] mq900:text-5xl mq900:leading-[66px]"
              style={chitkaraUniversityStyle}
            >
              {chitkaraUniversity}
            </div>
          </div>
          <p className="m-0 self-stretch relative text-mini leading-[22px] font-medium text-darkslategray-100 z-[1]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle1431: PropTypes.string,
  chitkaraUniversity: PropTypes.string,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  description: PropTypes.string,
  onClick: PropTypes.func, 
};

export default GroupComponent;
