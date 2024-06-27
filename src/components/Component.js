import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start pt-[166px] pb-[100px] pr-5 pl-[21px] box-border relative gap-[170px] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-109xl text-white font-questrial mq825:gap-[42px] mq825:pt-[70px] mq825:pb-[42px] mq825:box-border mq450:gap-[21px] mq1275:gap-[85px] mq1275:pt-[108px] mq1275:pb-[65px] mq1275:box-border ${className}`}
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1698084059435-a50ddfd69303?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})` }}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300" />
      <div className="w-[22px] h-[22px] absolute !m-[0] bottom-[98px] left-[768px] rounded-[50%] bg-gainsboro-100 box-border z-[1] border-[0px] border-solid border-white" />
      <div className="w-[1153px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 h-20 mb-4 flex-1 relative text-inherit leading-[28px] font-normal text-2xl font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff_38.5%,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center mix-blend-normal max-w-full z-[1] mq825:text-32xl mq825:leading-[17px] mq450:text-13xl mq450:leading-[11px]">
            Universities Notes
          </h1>
          <p className="!m-[0]  h-72 w-[960px] absolute bottom-[-266px] left-[calc(50%_-_480px)] text-5xl leading-[28px] flex items-center justify-center z-[1] mq450:text-lgi mq450:leading-[22px]">
            Welcome to notex, your ultimate destination for unlocking the
            treasure trove of university notes! Dive into a world where
            knowledge meets convenience, where the secrets of academia are just
            a click away. Whether you're a student seeking clarity or a lifelong
            learner hungry for insight, our curated collection of notes offers a
            passport to academic excellence. Let the journey begin as you
            explore, discover, and empower your mind with notex.
          </p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full mt-[-68px] text-5xl">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <p className="!m-[0] h-72 w-[960px] absolute bottom-[-46px] left-[95px] leading-[28px] flex items-center opacity-[0] z-[2] mq450:text-lgi mq450:leading-[22px]">
              <span className="w-full">
                <span className="block">&nbsp;</span>
                <span className="block">
                  Step into the realm of knowledge with Docswol, where a
                  treasure trove of course notes awaits. From the captivating
                  world of literature to the fascinating realms of science and
                  mathematics, we've curated a collection designed to ignite
                  your curiosity and fuel your learning journey. Dive deep into
                  our comprehensive summaries, insightful explanations, and
                  practical insights crafted to empower learners like you. With
                  Docswol, education becomes an adventure, and every course note
                  is a stepping stone towards greater understanding. Join us and
                  embark on a voyage of discovery where learning knows no
                  bounds.
                </span>
              </span>
            </p>
            <h1 className="m-0 h-7 flex-1 relative text-109xl leading-[28px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff_38.5%,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center opacity-[0] mix-blend-normal max-w-full z-[3] mq825:text-32xl mq825:leading-[17px] mq450:text-13xl mq450:leading-[11px]">
              Different Courses
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[1153px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="h-5 w-48 flex flex-row items-start justify-between gap-[20px]">
          <div className="h-[22px] w-[22px] relative rounded-[50%] bg-gainsboro-200 box-border opacity-[0] z-[2] border-[0px] border-solid border-white" />
          <div className="h-[22px] w-[22px] relative rounded-[50%] bg-gainsboro-200 box-border z-[1] border-[0px] border-solid border-white" />
          <div className="h-[22px] w-[22px] relative rounded-[50%] bg-gainsboro-200 box-border z-[1] border-[0px] border-solid border-white" />
        </div>
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;