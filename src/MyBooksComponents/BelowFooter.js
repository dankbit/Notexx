import PropTypes from "prop-types";

const BelowFooter = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-1809px] w-[1364px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[164px_124px] min-h-[1344px] shrink-0 max-w-full text-left text-11xl text-white font-poppins mq450:gap-[15px] mq900:gap-[31px] mq1325:gap-[62px] ${className}`}
    >
      <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
          alt=""
          src="/rectangle-1468-1@2x.png"
        />
      </div>
      <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
          alt=""
          src="/bottom-content@2x.png"
        />
      </div>
      <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
          alt=""
          src="/image-577-1@2x.png"
        />
      </div>
      <div className="h-[590px] w-[364px] flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[590px] flex-1 relative max-w-full flex items-center justify-center z-[0]">
          <img
            className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[4px] w-full [transform:scale(1.055)]"
            alt=""
            src="/image-579@2x.png"
          />
        </div>
        <div className="h-[100px] w-[466px] !m-[0] absolute bottom-[192px] left-[calc(50%_-_233px)] rounded-49xl [background:linear-gradient(91.76deg,_#000_99.99%,_#747474)] flex flex-row items-start justify-center pt-7 px-5 pb-[27px] box-border whitespace-nowrap z-[1]">
          <div className="h-[100px] w-[466px] relative rounded-49xl [background:linear-gradient(91.76deg,_#000_99.99%,_#747474)] hidden max-w-full" />
          <div className="self-stretch w-[167px] relative font-semibold inline-block z-[2]">
            Show More
          </div>
        </div>
      </div>
      <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
          alt=""
          src="/rectangle-1470-1@2x.png"
        />
      </div>
      <img
        className="w-[364px] relative max-h-full object-cover max-w-full"
        alt=""
        src="/bottom-content@2x.png"
      />
    </section>
  );
};

BelowFooter.propTypes = {
  className: PropTypes.string,
};

export default BelowFooter;