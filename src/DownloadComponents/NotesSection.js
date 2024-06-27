import { useCallback } from "react";
import NoteComp from "./FrameComponent3";
import PropTypes from "prop-types";

const NotesSection = ({ className = "" }) => {
  const onDSAModuleClick = useCallback(() => {
    // Please sync "preview page" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[16px] max-w-full shrink-0 text-center text-7xl text-darkslateblue font-questrial ${className}`}
    >
      <div className="w-[1454px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
          <img
            className="h-[123px] w-[179px] relative rounded-17xl object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/screenshot-20240206-171323-1@2x.png"
            onClick={onDSAModuleClick}
          />
          <NoteComp
            iondocuments="/iondocuments.svg"
            onScreenshotClick={onDSAModuleClick}
          />
          <div className="w-[556px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full text-4xl text-black">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pr-[31px] pl-0">
                <div className="relative inline-block min-w-[110px] mq450:text-lg">
                  2024/2025
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 font-poppins">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <img
                      className="w-7 h-7 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/mdilike.svg"
                    />
                  </div>
                  <div className="relative font-light inline-block min-w-[47px] mq450:text-lg">
                    ( 9 )
                  </div>
                </div>
              </div>
              <button className="cursor-pointer pt-2.5 px-[46px] pb-[13px] bg-[transparent] rounded-58xl flex flex-row items-start justify-start border-[1px] border-solid border-dimgray hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                <div className="h-12 w-[138px] relative rounded-58xl box-border hidden border-[1px] border-solid border-dimgray" />
                <div className="relative text-xl font-questrial text-gray-200 text-left inline-block min-w-[45px] z-[1] mq450:text-base">
                  Save
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray" />
    </div>
  );
};

NotesSection.propTypes = {
  className: PropTypes.string,
};

export default NotesSection;