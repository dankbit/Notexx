
import FrameComponent2 from "../components/FrameComponent2";
import PreviewComponent2 from "../PreviewPageComponents/PreviewComponent2";
import CourseGroupComponent from "../PreviewPageComponents/CourseGroupComponent";
import dsacourseimg from "../images/dsacourseimg.png";
import bookdoc from "../images/bookpreview.png";
import uni from "../images/fa_university.png";
import doc from "../images/ion_documents.png";
import { useEffect } from "react";
import BookPreview from "../MyBooksComponents/BookPreview";
import book from "../images/bookpreview.png";

const BookPreviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full  relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-5xl text-black font-questrial">
    
    
      <main className="w-full h-[1686px] !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-gainsboro flex flex-row items-start justify-end py-[82px] px-0 box-border max-w-full">
        <div className="h-[1686px] w-[1728px] relative bg-gainsboro hidden max-w-full" />
        <BookPreview />
      </main>
      <FrameComponent2 />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[541px] max-w-full mq450:gap-[68px] mq900:gap-[135px] mq1325:gap-[270px] mq1725:flex-wrap">
        <div className="flex flex-row items-start justify-start min-w-[1728px] shrink-0 [debug_commit:0448091] [row-gap:20px] max-w-full mq450:min-w-full mq900:min-w-full mq1325:min-w-full mq1725:flex-1 mq1725:flex-wrap mq1725:min-w-full">
          <div className="h-[1694px] w-[453px] flex flex-col items-start justify-start relative min-w-[453px] max-w-full mq900:min-w-full mq1725:flex-1">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[41px] px-4 box-border relative max-w-full z-[1] mq900:pt-[27px] mq900:pb-[27px] mq900:box-border mq1725:self-stretch mq1725:w-auto">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
              <div className="h-[637px] w-5 relative rounded-[25px] bg-whitesmoke-300 hidden z-[1]" />
              <div className="h-[100px] w-5 relative rounded-[38px] bg-lightgray hidden z-[2]" />
              <div className="h-[389px] w-[366px] flex flex-col items-start justify-start pt-[58px] px-6 pb-[26px] box-border gap-[57px] max-w-full z-[1] mq450:gap-[28px] mq900:pt-[38px] mq900:pb-5 mq900:box-border">
                <div className="self-stretch h-[305px] flex flex-col items-start justify-start pt-0 px-0 pb-[277px] box-border gap-[61.8px] shrink-0 [debug_commit:0448091] mq450:gap-[31px] mq900:pb-[180px] mq900:box-border">
                  <div className="w-[281px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <div className="relative leading-[28px] inline-block min-w-[77px] font-bold shrink-0 [debug_commit:0448091] mq450:text-[19px] mq450:leading-[22px]">{`Book `}</div>
                  </div>
                  
                  <div className="self-stretch mt-8 flex flex-col items-start justify-start gap-[46.9px] shrink-0 [debug_commit:0448091] text-2xl text-darkslategray mq450:gap-[23px]">
                    <div className="w-[179px] flex flex-row items-start justify-start pt-0 px-0 pb-[0.1px] box-border">
                      <img
                        className="h-[23.4px] w-[25px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={doc}
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
                        <div className="self-stretch   h-[30px] relative inline-block shrink-0 mq450:text-mid">
                          245 Documents
                        </div>
                      </div>
                      
                    </div>
                   

                    

                    
                  </div>
                  <hr className="w-full border-t-2 border-black my-4" />

                </div>
                <div className="flex  flex-row items-start justify-start  text-2xl">
                  <div className="flex flex-col items-start justify-start gap-[15px] shrink-0 [debug_commit:0448091]">
                   
                    <div className="relative bottom-[70px] text-xl text-left mq450:text-base">
                      Author: Udi Manber
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!m-[0] absolute top-[142px] left-[42px] flex flex-row items-start justify-start text-2xl">
              <img
                className="h-[153px] w-[105px] absolute !m-[0] top-[-120px] left-[-11px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src={book}
              />
              <div className="relative mt-10 text-3xl font-normal z-[3] mq450:text-mid">
                Introduction to algorithms 
              </div>
            </div>
          </div>
          <CourseGroupComponent />
        </div>
        <div className="h-[700px] w-[957px] flex flex-col items-start justify-start pt-[130px] px-0 pb-0 box-border min-w-[957px] max-w-full shrink-0 mq900:pt-[84px] mq900:box-border mq1325:min-w-full mq1725:flex-1">
          <div className="self-stretch flex-1 relative rounded-[20px] opacity-[0.5] shrink-0 [debug_commit:0448091] border-[2px] border-solid border-gold" />
        </div>
      </div>
      
    </div>
  );
};

export default BookPreviewPage;