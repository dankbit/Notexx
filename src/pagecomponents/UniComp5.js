import RecentItem from "./RecentItem";
import PropTypes from "prop-types";
import ShowNotes from "../pagecomponents/ShowNotes";
import recent1 from "../images/recent1.png";
import doc from "../images/ion_documents.png";
import thumbsup from "../images/mdi_like.png";
import threedots from "../images/threedots.png";
import dsa1img from "../images/dsa1img.png";
import dsa2img from "../images/dsa2image.png";
import dsa3img from "../images/dsa3img.png";

const UniComp5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[123px] pr-[21px] pl-5 box-border max-w-full text-center text-20xl text-black font-questrial mq900:pb-[52px] mq900:box-border mq1325:pb-20 mq1325:box-border ${className}`}
    >
      <div className="w-[1551px] flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="w-[1220px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
            <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-4xl mq900:text-12xl">
              Recently Added
            </h3>
            <div className="self-stretch flex flex-row items-start justify-end text-7xl text-dimgray-200 font-poppins">
              <div className="w-[301px] flex flex-row items-start justify-between gap-[20px]">
                <div className="relative font-medium inline-block min-w-[60px] mq450:text-2xl">
                  Year
                </div>
                <div className="relative font-medium inline-block min-w-[93px] mq450:text-2xl">
                  Upvote
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[15px] flex flex-row items-start justify-start pt-0 pb-[14.3px] pr-0 pl-1 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
        </div>
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[23px] box-border gap-[29.6px] max-w-full text-7xl text-darkslateblue">
          <RecentItem
            recentitem={recent1}
            iondocuments={doc}
            mdilike={thumbsup}
            phdotsThreeCircleVertical={threedots}
          />
          <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
          <RecentItem
            recentitem={dsa1img}
            iondocuments={doc}
            mdilike={thumbsup}
            phdotsThreeCircleVertical={threedots}
            propAlignSelf="stretch"
            propFlex="unset"
            propGap="24px"
          />
          <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
          <RecentItem
            recentitem={dsa2img}
            iondocuments={doc}
            mdilike={thumbsup}
            phdotsThreeCircleVertical={threedots}
            propAlignSelf="stretch"
            propFlex="unset"
            propGap="24px"
          />
          <div className="self-stretch h-[0.7px] flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.7px] border-solid border-dimgray-200" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full">
            <RecentItem
              recentitem={dsa3img}
              iondocuments={doc}
              mdilike={thumbsup}
              phdotsThreeCircleVertical={threedots}
              propAlignSelf="unset"
              propFlex="1"
              propGap="28px"
            />
          </div>
        </div>
        <ShowNotes
          showMoreDocuments="Show More Documents"
          vector="/vector-2.svg"
          propWidth="unset"
          propGap="5px"
          propWidth1="unset"
          propHeight="unset"
        />
      </div>
    </section>
  );
};

UniComp5.propTypes = {
  className: PropTypes.string,
};

export default UniComp5;