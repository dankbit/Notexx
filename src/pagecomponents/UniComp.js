import { useMemo, useState } from "react";
import PropTypes from "prop-types";

const UniComp = ({
  className = "",
  yourName,
  collegeFieldPlaceholder,
  propGap,
  propWidth,
  propWidth1,
  propWidth2,
  propHeight,
}) => {
  const [nameValue, setNameValue] = useState("");

  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const nameInputStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const collegeInputStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const collegeFieldStyle = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight,
    };
  }, [propWidth2, propHeight]);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-0 px-[30px] gap-[280px] max-w-full text-left text-3xl text-dimgray font-questrial border-[1px] border-solid border-darkgray mq825:flex-wrap mq825:gap-[140px] mq825:justify-center mq450:gap-[70px] ${className}`}
      style={groupDivStyle}
    >
      <div className="self-stretch w-[864px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
      <div
        className="w-[122px] flex flex-col items-start justify-start pt-[25.5px] px-0 pb-0 box-border"
        style={nameInputStyle}
      >
        <input
          className="w-full border-none outline-none bg-transparent h-[29px] inline-block z-[1] font-questrial text-3xl text-dimgray"
          type="text"
          value={nameValue}
          onChange={handleNameChange}
          placeholder={yourName}
        />
      </div>
      <div
        className="h-20 w-[265px] flex flex-row items-start justify-between gap-[20px]"
        style={collegeInputStyle}
      >
        <div className="self-stretch w-px  relative box-border z-[1] border-r-[1px] border-solid border-darkgray" />
        <input
          className="w-[212px] mt-3 border-none outline-none bg-transparent h-[54.5px] font-questrial text-3xl text-dimgray"
          placeholder={collegeFieldPlaceholder}
          type="text"
          style={collegeFieldStyle}
        />
      </div>
    </div>
  );
};

UniComp.propTypes = {
  className: PropTypes.string,
  yourName: PropTypes.string,
  collegeFieldPlaceholder: PropTypes.string,

  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propHeight: PropTypes.any,
};

export default UniComp;
