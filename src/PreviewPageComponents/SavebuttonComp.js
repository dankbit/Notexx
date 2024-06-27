import PropTypes from "prop-types";
import savetick from "../images/savetick.png";
import { useNavigate } from "react-router-dom";


const SavebuttonComp = ({ className = "" }) => {
    

   

  return (
    <div
      className={`w-full bg-white overflow-hidden flex flex-col items-end justify-start pt-[49px] px-7 pb-[19px] box-border gap-[43px] leading-[normal] tracking-[normal] mq450:gap-[21px] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] text-left text-5xl text-black font-questrial">
        <div className="flex flex-col items-start justify-start gap-[39px]">
          <h3 className="m-0 relative text-9xl text-darkslategray-100 mq450:text-lgi">
            Save to a Studylist
          </h3>
          <div className="flex flex-row items-start justify-start gap-[11px] text-[20px] text-gray-300">
            <input
              className="m-0 h-[25px] w-[25px] relative rounded-md box-border border-[0.7px] border-solid border-gray-100"
              type="checkbox"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] relative text-black text-5xl inline-block min-w-[40px] mq450:text-base">
                DSA
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-left text-5xl text-gray-300 font-questrial">
        <div className="w-[650px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[27px]">
            <h3 className="m-0 relative text-darkslategray-200 font-normal mq450:text-lgi">
              Create new Studylist
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-[30px] mq675:flex-wrap">
            <div className="w-[343px] flex flex-row items-center justify-start gap-[10px] max-w-full mq450:flex-wrap">
              <h2 className="m-0 relative text-darkslategray-200 font-normal font-inherit inline-block min-w-[17px] mq450:text-lg mq450:w-full mq450:h-[17px] mq750:text-5xl">
                +
              </h2>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[205px]">
                <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-3 border-[1px] border-solid border-gray-100">
                  <div className="h-[30px] w-[316px] relative box-border hidden border-[1px] border-solid border-gray-100" />
                  <input
                    className="w-[146px] [border:none] [outline:none] font-questrial text-base bg-[transparent] h-4 relative text-black text-left inline-block p-1 z-[1]"
                    placeholder="Enter studylist name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <button className="cursor-pointer py-[5px] px-[25px] bg-[transparent] rounded-full flex flex-row items-center justify-center border-[1px] border-solid border-cornflowerblue  hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue">
                <div className="h-[30px] w-[100px] relative rounded-full box-border hidden border-[1px] border-solid border-cornflowerblue" />
                <div className="relative text-base font-questrial text-cornflowerblue text-left inline-block min-w-[49px] z-[1]">
                  Create
                </div>
              </button>
              <button className="cursor-pointer py-[5px] px-6 bg-[transparent] rounded-full flex flex-row items-center justify-center border-[1px] border-solid border-gray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100"
                 

              >
                <div className="h-[30px] w-[100px] relative rounded-full box-border hidden border-[1px] border-solid border-gray-100" />
                <a className="[text-decoration:none] relative text-base font-questrial text-gray-200 text-left inline-block min-w-[51px] z-[1]">
                  Cancel
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <button className="cursor-pointer [border:none] pt-2.5 pb-[11px] pr-6 pl-[25px] bg-darkslateblue rounded-58xl flex flex-row items-start justify-start gap-[8.5px]">
        <div className="h-12 w-[157px] relative rounded-58xl bg-darkslateblue hidden" />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className="w-[21.4px] h-5 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src={savetick}
          />
        </div>
        <div className="relative text-lg font-poppins text-white text-left inline-block min-w-[78px] z-[1]">
          Confirm
        </div>
      </button>
    </div>
  );
};

SavebuttonComp.propTypes = {
  className: PropTypes.string,
};

export default SavebuttonComp;
