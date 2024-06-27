import PropTypes from "prop-types";
import BookHero from "../images/BookHero.png";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[541px] shrink-0 max-w-full text-center text-81xl text-white font-questrial mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap ${className}`}
    >
      <div className="h-[888px] w-[2200px] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[363px] pb-[377px] pr-[499px] pl-0 box-border gap-[309px] min-w-[1728px] max-w-full z-[1] mq450:gap-[77px] mq450:min-w-full mq900:gap-[154px] mq900:pt-[153px] mq900:pb-[159px] mq900:box-border mq900:min-w-full mq1325:pt-[236px] mq1325:pb-[245px] mq1325:box-border mq1325:min-w-full mq1725:flex-1 mq1725:pr-0 mq1725:box-border mq1725:min-w-full"
        style={{
            backgroundImage: `url(${BookHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            backgroundPositionY:'top'

          }}
      >
        <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
        <div className="w-[695px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[19px] max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5 box-border max-w-full">
            
          </div>
          
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[891px] flex flex-col items-end justify-start gap-[30px] max-w-full">
           
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="h-[103px] w-[104px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[3px] px-0 pb-0 box-border relative">
                <div className="h-[976px] w-[1735px] absolute !m-[0] right-[-1631px] bottom-[-875px] bg-white z-[1]" />
                {/* <div className="h-[188px] w-[1735px] relative overflow-hidden shrink-0 max-w-[1669%] z-[1]">
                  <div className="absolute top-[139px] left-[0px] w-[1735px] h-[222px] overflow-hidden hidden" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[699px] w-[957px] flex flex-col items-start justify-start pt-[129px] px-0 pb-0 box-border min-w-[957px] max-w-full shrink-0 mq900:pt-[84px] mq900:box-border mq1325:min-w-full mq1725:flex-1">
        <div className="self-stretch flex-1 relative rounded-xl opacity-[0.5] shrink-0 border-[2px] border-solid border-gold" />
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;