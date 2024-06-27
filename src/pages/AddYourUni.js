import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UniComp2 from "../pagecomponents/UniComp2";
import close from "../images/closeicon.png";
import institutes from "./Institutes";
import logo from "../images/logoo.png";

const AddYourUni = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    // Handle click on logo image if needed
  }, []);

  const onRaphaelcrossClick = useCallback(() => {
    navigate("/institutes");
    console.log("Navigated to the institutes");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[49px] px-[68px] pb-[189px] gap-[54px] leading-[normal] tracking-[normal] border-[1px] border-solid border-black lg:pl-[34px] lg:pr-[34px] lg:box-border mq450:gap-[27px]">
      <section className="w-full flex flex-row items-end justify-between pt-0 px-0 pb-[26px] box-border gap-[20px] max-w-full mq450:flex-wrap">
        <div className="w-[190px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
          <img
            className="self-stretch h-[38px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src={logo}
            onClick={onImageClick}
          />
        </div>
        <img
          className="h-[60px] w-[60px] relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src={close}
          onClick={onRaphaelcrossClick}
        />
      </section>
      <UniComp2 className="w-full max-w-[1479px]" />
      <div className="w-full flex flex-row items-start justify-center max-w-full">
        <button className="cursor-pointer [border:none] pt-[25px] px-5 pb-6 bg-black w-[376px] rounded-3xs flex flex-row items-start justify-center box-border max-w-full hover:bg-steelblue">
          <div className="h-20 w-[376px] relative rounded-3xs bg-darkslateblue hidden max-w-full" />
          <div className="relative text-[30px] font-questrial text-white text-left inline-block min-w-[96px] z-[1] mq825:text-[24px] mq450:text-lg">Submit</div>
        </button>
      </div>
    </div>
  );
};

export default AddYourUni;
