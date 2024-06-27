import ShowNotes from "./ShowNotes";
import PropTypes from "prop-types";
import courses1 from "../images/Courses1.png";
import vector1 from "../images/Vector(1).png";

const ShowMoreCoursesContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[119px] pr-[21px] pl-5 box-border max-w-full mq900:pb-[77px] mq900:box-border ${className}`}
    >
      <div className="w-[1541px] flex flex-col items-start justify-start gap-[83px] max-w-full mq450:gap-[21px] mq900:gap-[41px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1725:flex-wrap mq1725:justify-center">
            
          <img
            className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
            alt=""
            src={courses1}
          />
          <img
            className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
            alt=""
            src={courses1}
          />
          <img
            className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
            alt=""
            src={courses1}
          />
          <img
            className="self-stretch w-[323px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover min-h-[328px] max-w-full"
            alt=""
            src={courses1}
          />
        </div>
        <ShowNotes
          showMoreDocuments="Show More Courses"
          vector={vector1}
          propWidth="unset"
          propGap="39px"
          propWidth1="21px"
          propHeight="21px"
        />
      </div>
    </section>
  );
};

ShowMoreCoursesContainer.propTypes = {
  className: PropTypes.string,
};

export default ShowMoreCoursesContainer;