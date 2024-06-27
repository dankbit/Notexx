import { useCallback } from "react";
import PropTypes from "prop-types";

const NoteContent = ({
  className = "",
  noteitem,
  iondocuments,
  mdilike,
  phdotsThreeCircleVertical,
  onScreenshotClick,
}) => {
  const onScreenshotClick1 = useCallback(() => {
    // Please sync "preview page" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[3px] box-border max-w-full gap-[20px] text-center text-4xl text-black font-questrial mq1325:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-[127px] pl-0 box-border gap-[28px] max-w-full text-7xl text-darkslateblue mq450:pr-5 mq450:box-border mq900:flex-wrap mq900:pr-[63px] mq900:box-border">
        <img
          className="h-[123px] w-[179px] relative rounded-17xl object-cover cursor-pointer mq900:flex-1"
          loading="lazy"
          alt=""
          src={noteitem}
          onClick={onScreenshotClick}
        />
        <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[424px] max-w-full mq900:flex-1 mq900:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div
              className="relative cursor-pointer mq450:text-2xl"
              onClick={onScreenshotClick}
            >
              DSA Module 1 Note - Lecture notes 1
            </div>
            <div className="flex flex-row items-start justify-start gap-[5px] text-dimgray-200 font-poppins">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
                  alt=""
                  src={iondocuments}
                />
              </div>
              <div className="relative inline-block min-w-[120px] mq450:text-2xl">
                55 Pages
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
        <div className="relative inline-block min-w-[110px] mq450:text-lg">
          2024/2025
        </div>
      </div>
      <div className="w-[255px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border font-poppins">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <img
              className="w-7 h-7 relative overflow-hidden shrink-0"
              alt=""
              src={mdilike}
            />
          </div>
          <div className="relative font-light inline-block min-w-[47px] mq450:text-lg">
            ( 9 )
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

NoteContent.propTypes = {
  className: PropTypes.string,
  screenshot202402061713231: PropTypes.string,
  iondocuments: PropTypes.string,
  mdilike: PropTypes.string,
  phdotsThreeCircleVertical: PropTypes.string,

  /** Action props */
  onScreenshotClick: PropTypes.func,
};

export default NoteContent;