import PropTypes from "prop-types";
import { useState } from "react";
import maxmin from "../images/Group17526.png";
import like from "../images/mdi_like.png";
import share from "../images/majesticons_share.png";
import downloadbutton from "../images/dwnldbutton.png";
import SavebuttonComp from "./SavebuttonComp";
import SharePageComponent from "./SharePageComponent"; // Import SharePageComponent

const CourseGroupComponent = ({ className = '' }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false); // State for share modal

  const handleSaveClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleShareClick = () => {
    setShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setShareModalOpen(false);
  };

  return (
    <div
      className={`bg-whitesmoke-100 flex flex-row items-start justify-start py-[21px] pr-[90px] pl-[183px] box-border gap-[30px] max-w-full z-[2] text-left text-xl text-gray-300 font-poppins mq450:pl-5 mq450:box-border mq900:gap-[15px] mq900:pl-[45px] mq900:pr-[22px] mq900:box-border mq1325:flex-wrap mq1325:pl-[91px] mq1325:pr-[45px] mq1325:box-border ${className}`}
    >
      <div className="h-5 w-5 relative overflow-hidden shrink-0 hidden" />
      <div className="h-[90px] w-[1275px] relative bg-whitesmoke-100 hidden max-w-full" />
      <button 
        className="cursor-pointer pt-2.5 px-[46px] pb-[13px] bg-[transparent] rounded-58xl flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-dimgray hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
        onClick={handleSaveClick}
      >
        <div className="h-12 w-[138px] relative rounded-58xl box-border hidden border-[1px] border-solid border-dimgray" />
        <div className="relative text-xl font-questrial text-black text-left inline-block min-w-[45px] z-[1] mq450:text-base">
          Save
        </div>
      </button>
      <div className="rounded-58xl overflow-x-auto flex flex-row items-start justify-start py-[7px] px-[29px] gap-[9px] z-[1] border-[1px] border-solid border-dimgray">
        <div className="h-12 w-[138px] relative rounded-58xl box-border shrink-0 hidden border-[1px] border-solid border-dimgray" />
        <div className="flex flex-row items-start justify-start py-0 px-[9px] z-[1] border-[1px] border-solid border-dimgray">
          <div className="relative inline-block min-w-[7px] mq450:text-base">
            1
          </div>
          <div className="h-[25px] w-[25px] relative box-border hidden border-[1px] border-solid border-dimgray" />
        </div>
        <div className="relative inline-block min-w-[10px] z-[1] mq450:text-base">
          /
        </div>
        <div className="relative inline-block min-w-[25px] z-[1] mq450:text-base">
          35
        </div>
      </div>
      <img
        className="self-stretch w-[138px] relative max-h-full min-h-[48px] z-[1]"
        loading="lazy"
        alt=""
        src={maxmin}
      />
      <button className="cursor-pointer pt-2 pb-[9px] pr-[23px] pl-6 bg-[transparent] rounded-58xl flex flex-row items-start justify-start gap-[6.7px] z-[1] border-[1px] border-solid border-dimgray">
        <div className="h-12 w-[138px] relative rounded-58xl box-border hidden border-[1px] border-solid border-dimgray" />
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            className="w-[18.3px] h-[16.7px] relative z-[2]"
            alt=""
            src={like}
          />
        </div>
        <a className="[text-decoration:none] relative text-lg font-poppins text-gray-300 text-left inline-block min-w-[64px] z-[2]">
          Upvote
        </a>
      </button>
      <button
        className="cursor-pointer pt-2 pb-[9px] pr-[26px] pl-[27px] bg-[transparent] rounded-58xl flex flex-row items-start justify-start gap-[10px] z-[1] border-[1px] border-solid border-dimgray"
        onClick={handleShareClick}
      >
        <div className="h-12 w-[138px] relative rounded-58xl box-border hidden border-[1px] border-solid border-dimgray" />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src={share}
          />
        </div>
        <div className="relative text-lg font-poppins text-gray-300 text-left inline-block min-w-[53px] z-[1]">
          Share
        </div>
      </button>
      <button className="cursor-pointer [border:none] pt-2.5 px-[22px] pb-[11px] bg-darkslateblue rounded-58xl flex flex-row items-start justify-start gap-[6px] z-[1]">
        <div className="h-12 w-[162px] relative rounded-58xl bg-darkslateblue hidden" />
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-[21px] h-[18.8px] relative z-[1]"
            alt=""
            src={downloadbutton}
          />
        </div>
        <div className="relative text-lg font-poppins text-white text-left inline-block min-w-[91px] z-[1]">
  Download
</div>
</button>

{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
    <div className="bg-white p-6 rounded-md z-50">
      <button className="absolute top-0 right-0 mt-2 mr-2" onClick={handleCloseModal}>
        X
      </button>
      <SavebuttonComp />
    </div>
  </div>
)}

{isShareModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseShareModal}></div>
    <div className="bg-white p-6 rounded-md z-50">
      <button className="absolute top-0 right-0 mt-2 mr-2" onClick={handleCloseShareModal}>
        X
      </button>
      <SharePageComponent />
    </div>
  </div>
)}
</div>
);
};

CourseGroupComponent.propTypes = {
  className: PropTypes.string,
};

export default CourseGroupComponent;
