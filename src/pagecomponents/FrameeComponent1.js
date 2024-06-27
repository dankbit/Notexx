import { useCallback } from "react";
import PropTypes from "prop-types";
import downarrow from "../images/ep_arrow-down-bold.png";
import AddYourUni from "../pages/AddYourUni";
import { useNavigate, useLocation } from "react-router-dom";


const FrameeComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGroupContainerClick = useCallback(() => {
    if (location.pathname !== "/AddYourUni") {
      navigate("/AddYourUni");
      console.log("Navigate to AddInstitutes");
    }
  }, [navigate, location]);

  return (
    <div
      className={`w-[1547px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-left text-41xl text-black font-questrial ${className}`}
    >
      <div className="w-[653px] flex flex-col items-end justify-start gap-[60px] max-w-full mq900:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <button className="cursor-pointer [border:none] pt-[34px] pb-[35px] pr-5 pl-[23px] bg-[transparent] w-[466px] rounded-49xl [background:linear-gradient(91.76deg,_#000,_#747474)] flex flex-row items-start justify-center box-border max-w-full z-[3]">
            <div className="h-[100px] w-[466px] relative rounded-49xl [background:linear-gradient(91.76deg,_#000,_#747474)] hidden max-w-full" />
            <div className="h-[31px] w-[149px] relative">
              <div className="absolute top-[0px] left-[0px] text-11xl font-questrial text-white text-left inline-block w-full h-full z-[1] mq450:text-lg mq900:text-5xl">
                Show More
              </div>
              <div className="absolute top-[12px] left-[89px] w-[3px] h-[13px] z-[4]" />
            </div>
          </button>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[26px] cursor-pointer z-[3]"
          onClick={onGroupContainerClick}
        >
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-17xl mq900:text-29xl">
            Can’t find your university
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={downarrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameeComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameeComponent1;