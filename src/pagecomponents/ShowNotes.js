import { useMemo } from "react";
import PropTypes from "prop-types";
import vector1 from "../images/Vector(1).png";

const ShowNotes = ({
  className = "",
  showMoreDocuments,
  vector,
  propWidth,
  propGap,
  propWidth1,
  propHeight,
}) => {
  const groupButtonStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full ${className}`}
    >
      <button
  className="cursor-pointer pt-5 px-12 pb-[19px] bg-white w-[728px] rounded-63xl box-border flex flex-row items-start justify-center gap-[20px] max-w-full border-[1px] border-solid border-dimgray-200 hover:bg-darkslategray-100"
  style={groupButtonStyle}
>
        <div className="h-[70px] w-[728px]  relative rounded-63xl bg-white box-border hidden max-w-full border-[1px] border-solid border-dimgray-200" />
        <div className="relative text-7xl ml-7 font-questrial text-black text-center z-[1] mq450:text-2xl">
          {showMoreDocuments}
        </div>
        <div
          className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border w-[21px] h-[21px]"
          style={frameDivStyle}
        >
          <img className="w-[21px] h-3 relative z-[1]" alt="" src={vector} />
        </div>
      </button>
    </div>
  );
};

ShowNotes.propTypes = {
  className: PropTypes.string,
  showMoreDocuments: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight: PropTypes.any,
};

export default ShowNotes;