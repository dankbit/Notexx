import UniComp4 from "./UniComp4";
import ShowNotes from "./ShowNotes";
import PropTypes from "prop-types";
import dsa2img from "../images/dsa2image.png";
import doc from "../images/ion_documents.png";
import thumbsup from "../images/mdi_like.png";
import threecircledots from "../images/threedots.png";
import dsa3img from "../images/dsa3img.png";
import dsa4img from "../images/dsa4img.png";

const MoreNotes = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[119px] pr-[21px] pl-5 box-border max-w-full mq900:pb-[77px] mq900:box-border ${className}`}
    >
      <div className="w-[1547px] flex flex-col items-start justify-start gap-[29.6px] max-w-full">
        <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
        <UniComp4
          dsanotesscreenshot={dsa2img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threecircledots}
        />
        <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
        <UniComp4
          dsanotesscreenshot={dsa3img}
          iondocuments={doc}
          mdilike={thumbsup}
          phdotsThreeCircleVertical={threecircledots}
        />
        <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-200" />
        <div className="self-stretch flex flex-col items-end justify-start gap-[38px] max-w-full mq900:gap-[19px]">
          <UniComp4
            dsanotesscreenshot={dsa4img}
            iondocuments={doc}
            mdilike={thumbsup}
            phdotsThreeCircleVertical={threecircledots}
          />
          <ShowNotes
            showMoreDocuments="Show More Documents"
            vector="/vector-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

MoreNotes.propTypes = {
  className: PropTypes.string,
};

export default MoreNotes;