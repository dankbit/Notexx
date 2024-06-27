import { useCallback } from "react";
import UniComp4 from "./UniComp4";
import PropTypes from "prop-types";
import dsa1img from "../images/dsa1img.png";
import pageicon from "../images/ion_documents.png";
import thumbsup from "../images/mdi_like.png";
import threedots from "../images/threedots.png";
import { Navigate, useNavigate } from "react-router-dom";

const UniComp3 = ({ className = "" }) => {
    const navigate = useNavigate();
  const onScreenshotClick = useCallback(() => {
    navigate("/CoursePreviewPage");
    // Please sync "preview page" to the project
  }, [navigate]);

  return (
    <div
      className={`self-stretch ml-20 flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-center text-7xl text-black font-questrial ${className}`}
    >
      <div className="w-[1547px] flex flex-col items-start justify-start gap-[31.2px] max-w-full mq900:gap-[16px]">
        <h3 className="m-0 relative text-20xl font-normal font-inherit mq450:text-4xl mq900:text-12xl">
          Popular Notes
        </h3>
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
        <UniComp4
          dsanotesscreenshot={dsa1img}
          iondocuments={pageicon}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threedots}
          onScreenshotClick={onScreenshotClick}
        />
      </div>
    </div>
  );
};

UniComp3.propTypes = {
  className: PropTypes.string,
};

export default UniComp3;