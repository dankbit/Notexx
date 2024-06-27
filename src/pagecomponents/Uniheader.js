import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import arrow from "../images/fe_arrow-right.png";
import uni from "../images/fa_university.png";
import site from "../images/dashicons_admin-site-alt3.png";
import address from "../images/mdi_address-marker.png";
import searchicon from "../images/Vector.png";
import { useNavigate } from "react-router-dom";

const Uniheader = ({ className = "", universityname, courses }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const navigate = useNavigate();

  const onUniversityTextClick = useCallback(() => {
    navigate("/institutes");
  }, [navigate]);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value) {
      const filtered = courses.filter((course) =>
        course.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [courses]);

  return (
    <div
      className={`self-stretch bg-gainsboro flex flex-col items-center justify-start pt-[70px] pb-[67px] pr-5 pl-[21px] box-border gap-[75px] max-w-full text-center text-8xl text-cornflowerblue font-questrial mq450:gap-[19px] mq450:pt-[45px] mq450:pb-11 mq450:box-border mq900:gap-[37px] ${className}`}
    >
      <div className="w-[1728px] h-[412px] relative bg-gainsboro hidden max-w-full" />
      <div className="w-[1551px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1325:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[23px] max-w-full mq900:flex-wrap">
                <div
                  className="relative inline-block min-w-[118px] cursor-pointer z-[1] mq450:text-3xl"
                  onClick={onUniversityTextClick}
                >
                  University
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-2.5 pl-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src={arrow}
                  />
                </div>
                <div className="relative cursor-pointer text-darkslategray inline-block max-w-full z-[1] mq450:text-3xl">
                  {universityname}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xl text-darkslategray">
                <div className="flex flex-row items-start justify-start gap-[13px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src={site}
                    />
                  </div>
                  <div className="relative z-[1] mq450:text-base">
                    https://www.aku.ac.in/website
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-21xl text-black mq1325:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[46px] max-w-full mq900:flex-wrap mq900:gap-[23px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src={uni}
              />
              <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq900:text-13xl">
                {universityname}
              </h3>
            </div>
            <div className="w-[308px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border text-left text-xl text-darkslategray">
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src={address}
                />
                <div className="flex-1 relative z-[1] mq450:text-base">
                  Village, Post, Indore Bypass Rd, Arandia, Jhalariya, Indore,
                  Madhya Pradesh 452016
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1551px] rounded-63xl bg-white box-border flex flex-row items-start justify-between py-[29px] pr-[51px] pl-[85px] max-w-full gap-[20px] z-[1] border-[1px] border-solid border-gray-100 mq900:flex-wrap mq900:pl-[21px] mq900:box-border mq1325:pl-[42px] mq1325:pr-[25px] mq1325:box-border">
        <div className="h-[93px] w-[1551px] relative rounded-63xl bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-100" />
        <input
          className="w-[454px] [border:none] [outline:none] font-questrial text-11xl bg-[transparent] h-[31px] relative text-dimgray-100 text-center inline-block max-w-full p-0 z-[2] mq450:text-lg mq900:text-5xl"
          placeholder="Search for course in this university"
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <img
          className="h-[30px] w-[30px] relative z-[2]"
          alt=""
          src={searchicon}
        />
      </div>
      {searchInput && (
        <div className="w-[1551px] bg-white box-border flex flex-col items-start justify-start max-w-full gap-[10px] z-[1] border-[1px] border-solid border-gray-100 rounded-63xl p-[20px]">
          {filteredCourses.map((course, index) => (
            <div key={index} className="text-xl text-darkslategray">
              {course}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Uniheader.propTypes = {
  className: PropTypes.string,
  universityname: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Uniheader;
