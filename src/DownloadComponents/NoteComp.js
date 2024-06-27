import { useCallback } from "react";
import PropTypes from "prop-types";

const NoteComp = ({
  className = "",
  iondocuments,
  onScreenshotClick,
}) => {
  const onDSAModuleClick = useCallback(() => {
    // Please sync "preview page" to the project
  }, []);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[427px] max-w-full text-center text-7xl text-darkslateblue font-questrial mq900:min-w-full ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div
          className="relative cursor-pointer mq450:text-2xl"
          onClick={onScreenshotClick}
        >
          DSA Module 1 Note - Lecture notes 1
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px] text-dimgray font-poppins">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
              loading="lazy"
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
  );
};

NoteComp.propTypes = {
  className: PropTypes.string,
  iondocuments: PropTypes.string,

  /** Action props */
  onScreenshotClick: PropTypes.func,
};

export default NoteComp;