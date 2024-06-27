import { useCallback } from "react";
import NoteContent from "./NoteContent";
import ShowNotes from "./ShowNotes";
import PropTypes from "prop-types";
import dsa2img from "../images/dsa2image.png";
import doc from "../images/ion_documents.png";
import thumbsup from "../images/mdi_like.png";
import threedots from "../images/threedots.png";
import dsa1img from "../images/dsa1img.png";



const NotesCardContainer = ({ className = "" }) => {
  const onScreenshotClick = useCallback(() => {
    // Please sync "preview page" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[121px] pr-[21px] pl-5 box-border max-w-full text-center text-20xl text-black font-questrial mq900:pb-[51px] mq900:box-border mq1325:pb-[79px] mq1325:box-border ${className}`}
    >
      <div className="w-[1547px] flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-[3px] text-left">
          <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[104px] mq450:text-4xl mq900:text-12xl">
            Notes
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[594px] text-7xl text-dimgray-200 mq450:pl-[148px] mq450:box-border mq1325:pl-[297px] mq1325:box-border">
          <div className="w-[293px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative inline-block min-w-[54px] mq450:text-2xl">
              Year
            </div>
            <div className="relative inline-block min-w-[84px] mq450:text-2xl">
              Upvote
            </div>
          </div>
        </div>
        <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <NoteContent
          noteitem={dsa2img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threedots}
          onScreenshotClick={onScreenshotClick}
        />
        <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <NoteContent
          noteitem={dsa1img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threedots}
        />
        <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <NoteContent
          noteitem={dsa2img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threedots}
        />
        <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <NoteContent
          noteitem={dsa1img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threedots}
        />
        <ShowNotes
          showMoreDocuments="Show More Documents"
          vector="/vector-3.svg"
          propWidth="728px"
          propGap="20px"
          propWidth1="21px"
          propHeight="21px"
        />
      </div>
    </section>
  );
};

NotesCardContainer.propTypes = {
  className: PropTypes.string,
};


export default NotesCardContainer;