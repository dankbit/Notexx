import { useCallback } from "react";
import PropTypes from "prop-types";

const HeroSection2 = ({ className = "" }) => {
  const onImageClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onInstituesTextClick = useCallback(() => {
    // Please sync "University Page" to the project
  }, []);

  const onCoursesTextClick = useCallback(() => {
    // Please sync "Courses page" to the project
  }, []);

  const onBooksTextClick = useCallback(() => {
    // Please sync "Books Page" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Sign Up Page" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start py-0 px-0 box-border gap-[541px] shrink-0 max-w-full text-center text-81xl text-white font-questrial mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap ${className}`}
    >
      <div className="w-[1728px] flex flex-col items-end justify-start min-w-[1728px] shrink-0 max-w-full mq450:min-w-full mq900:min-w-full mq1325:min-w-full mq1725:flex-1 mq1725:min-w-full">
        <header className="self-stretch shadow-[0px_4px_50px_rgba(2,_4,_3,_0.48)] bg-white flex flex-row items-start justify-between pt-[31px] pb-[18px] pr-[86px] pl-[50px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-5xl text-white font-outfit mq450:pr-5 mq450:box-border mq900:pl-[25px] mq900:pr-[43px] mq900:box-border">
          <div className="w-[975px] flex flex-row items-end justify-start gap-[150px] max-w-full mq900:gap-[37px] mq1325:w-[426px] mq1325:gap-[75px]">
            <div className="w-[276px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="flex flex-col items-start justify-start pt-[33px] pb-[11.5px] pr-[29px] pl-0 gap-[9.3px]">
                    <div className="w-[37px] h-[3px] relative box-border border-t-[3px] border-solid border-black" />
                    <div className="w-[37px] h-[3px] relative box-border border-t-[3px] border-solid border-black" />
                    <div className="w-[37px] h-[3px] relative box-border border-t-[3px] border-solid border-black" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                  <img
                    className="self-stretch h-[38px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
                    loading="lazy"
                    alt=""
                    src="/image-543@2x.png"
                    onClick={onImageClick}
                  />
                </div>
              </div>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[109.4px] max-w-full text-right text-5xl text-gray-300 font-questrial mq450:gap-[27px] mq900:gap-[55px] mq1325:hidden">
              <a
                className="[text-decoration:none] h-8 flex-1 relative leading-[28px] text-[inherit] inline-block cursor-pointer"
                onClick={onInstituesTextClick}
              >
                Institues
              </a>
              <a
                className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[99px] whitespace-nowrap cursor-pointer"
                onClick={onCoursesTextClick}
              >
                About Us
              </a>
              <a
                className="[text-decoration:none] h-14 flex-1 relative leading-[28px] text-[inherit] inline-block cursor-pointer"
                onClick={onBooksTextClick}
              >
                <p className="m-0">Contact Us</p>
              </a>
            </nav>
          </div>
          <div className="w-[131px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
            <div
              className="self-stretch h-16 relative cursor-pointer"
              onClick={onButtonContainerClick}
            >
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded bg-gray-400 w-[101px]" />
              <a className="[text-decoration:none] absolute top-[16px] left-[10px] leading-[28px] font-medium text-[inherit] inline-block w-[111.1px] h-7 whitespace-nowrap z-[1]">
                Log In
              </a>
            </div>
          </div>
        </header>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[364px] px-[479px] pb-9 box-border gap-[313px] bg-[url('/public/frame-17485@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] mt-[-2px] mq450:gap-[78px] mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border mq900:gap-[156px] mq900:pl-[239px] mq900:pr-[239px] mq900:pb-[23px] mq900:box-border">
          <div className="w-[753px] flex flex-col items-end justify-start gap-[16px] max-w-full">
            <div className="w-[735px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[537px] relative text-inherit tracking-[0.04em] font-normal font-inherit flex items-center justify-center [backdrop-filter:blur(100px)] [-webkit-text-stroke:3px_#fff] mix-blend-normal max-w-full mq450:text-11xl mq900:text-31xl">
                Downloads
              </h1>
            </div>
            <div className="self-stretch relative text-5xl tracking-[0.04em] mq450:text-lgi">
              Unlock the vault of your downloaded documents here.
            </div>
          </div>
          <div className="w-[753px] flex flex-row items-start justify-center max-w-full">
            <img
              className="h-[34px] w-[71px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="h-[760px] w-[957px] flex flex-col items-start justify-start min-w-[957px] max-w-full shrink-0 mq1325:min-w-full mq1725:flex-1">
        <div className="self-stretch h-[570px] relative rounded-xl box-border opacity-[0.5] shrink-0 border-[2px] border-solid border-gold" />
      </div>
    </section>
  );
};

HeroSection2.propTypes = {
  className: PropTypes.string,
};

export default HeroSection2;