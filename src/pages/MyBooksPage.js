import FrameComponent2 from "../components/FrameComponent2";
import HeroSection from "../MyBooksComponents/HeroSection";
import SavedBooksHeader from "../MyBooksComponents/SavedBooksHeader";
import BookList from "../MyBooksComponents/BookList";
import FrameComponent from "../components/FrameComponent";
import BelowFooter from "../MyBooksComponents/BelowFooter";

const MyBooksPage = () => {
  return (
    <div className="w-full h-[3378px] relative bg-white overflow-hidden flex flex-col items-start justify-start mix-blend-normal leading-[normal] tracking-[normal] mq1725:h-auto">
      <div className="self-stretch h-[906px] relative [transform:_rotate(-180deg)] hidden" />
      <FrameComponent2 />
      <HeroSection />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[85px] box-border gap-[96px] shrink-0 max-w-full z-[1] mq450:gap-[24px] mq450:pb-[23px] mq450:box-border mq900:gap-[48px] mq900:pb-9 mq900:box-border mq1325:pb-[55px] mq1325:box-border">
        <SavedBooksHeader />
        <BookList />
      </section>
      <div className="mt-20 w-full">

      <FrameComponent />
      </div>
      
    </div>
  );
};

export default MyBooksPage;
