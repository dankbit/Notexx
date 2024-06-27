import PropTypes from "prop-types";
import search from "../images/iconoir_search.png";

const SavedBooksHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dimgray-100 flex flex-row items-start justify-between pt-5 pb-[60px] pr-[93px] pl-[94px] box-border max-w-full gap-[20px] text-left text-31xl text-black font-questrial mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[47px] mq900:pr-[46px] mq900:box-border mq1725:flex-wrap ${className}`}
    >
      <div className="h-48 w-[1728px] relative bg-black hidden max-w-full" />
      <h1 className="m-0 mt-12 w-[681px] relative text-32xl tracking-[0.04em] font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-11xl mq900:text-21xl">
        Saved Books
      </h1>
      <div className="w-[576px] flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[576px] max-w-full text-3xl text-silver-100 mq900:min-w-full mq1725:flex-1">
        <div className="self-stretch rounded-25xl bg-white flex flex-row items-start justify-between py-px pr-[15px] pl-[34px] box-border max-w-full gap-[20px] z-[1] mq450:flex-wrap">
          <div className="h-[75px] w-[576px] relative rounded-25xl bg-white hidden max-w-full" />
          <img
            className="h-[23.3px] w-6 relative hidden"
            alt=""
            src={search}
          />
          <div className="relative leading-[73px] z-[1] mq450:text-lg mq450:leading-[58px]">
            Search Here...
          </div>
          <div className="w-[131px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <button className="cursor-pointer [border:none] py-[12.5px] px-[13px] bg-black self-stretch rounded-10xl flex flex-row flex-wrap items-start justify-start relative z-[2] hover:bg-darkslategray">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src={search}
              />
              <div className="absolute !m-[0] top-[calc(50%_-_36.5px)] right-[13px] text-3xl leading-[73px] font-questrial text-white text-center inline-block min-w-[71px] mq450:text-lg mq450:leading-[58px]">
                Search
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SavedBooksHeader.propTypes = {
  className: PropTypes.string,
};

export default  SavedBooksHeader;