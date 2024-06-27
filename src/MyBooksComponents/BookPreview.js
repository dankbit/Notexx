import { useCallback } from "react";
import PropTypes from "prop-types";
import dsaicon from "../images/Courses1.png";
import dsanotes from "../images/dsanote.png";
import dsatesticon from "../images/dsatestdoc.png";
import dsahide from "../images/dsahiddennote.png";
import { useNavigate } from "react-router-dom";

const BookPreview = ({ className = "" }) => {
  const navigate = useNavigate();
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Sign Up Page" to the project
    
    navigate('/SignUpPage');
  }, [navigate]);

  return (
    <section
      className={`h-[890px] w-[1295px] relative max-w-full z-[1] ${className}`}
    >
      <div className="absolute top-[0px] left-[5px] w-[1275px] h-[1604px] flex flex-row items-start justify-end pt-[38px] px-[38px] pb-0  box-border max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
        <div className="self-stretch w-[1179px] flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border relative gap-[80px] max-w-full z-[1]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={dsanotes}
          />
          <img
            className="w-full h-[154px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={dsatesticon}
          />
          <footer className="w-[1157px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button
              className="cursor-pointer [border:none] pt-[25px] pb-[18px] pr-5 pl-[21px] bg-[transparent] w-[533px] shadow-[1px_3px_13px_#fff] flex flex-row items-start justify-center box-border relative max-w-full z-[1]"
              onClick={onGroupButtonClick}
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-46xl bg-darkslateblue" />
              <div className="relative text-7xl font-questrial text-white text-left z-[1] mq450:text-2xl">
                Read Whole Document
              </div>
            </button>
          </footer>
        </div>
        <div className="h-[890px] w-5 relative bg-whitesmoke-200 hidden z-[2]" />
        <div className="h-[131px] w-5 relative bg-silver hidden z-[3]" />
        <div className="h-5 w-5  relative hidden z-[4]">
          <img
            className="absolute h-[37%]  w-6/12 top-[33%] right-[25%] bottom-[30%] left-[25%] max-w-full overflow-hidden max-h-full"
            alt=""
            src=""
          />
          <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-[0.5px] border-solid border-gray-100" />
        </div>
      </div>
      <img
        className="absolute h-[2.25%] w-[1.54%] top-[97.75%] right-[96.91%] bottom-[0%] left-[1.54%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
        loading="lazy"
        alt=""
        src={dsahide}
      />
    </section>
  );
};

BookPreview.propTypes = {
  className: PropTypes.string,
};


export default BookPreview;