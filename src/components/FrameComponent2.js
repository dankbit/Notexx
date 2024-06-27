import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../images/logoo.png";
import closeIcon from "../images/closeicon.png"; 
import institutes from "../pages/Institutes";
import { useLocation } from "react-router-dom";
import StudyListPage from "../pages/StudyListPage";
import MyBooksPage from "../pages/MyBooksPage";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onImage543Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // ...
  const onStudyList = useCallback(() => {
    
    navigate("/StudyListPage");
  },[navigate]);

  const onMyBooks = useCallback(() => {
    
    navigate("/MyBooksPage");
  },[navigate]);

  const onInstituesTextClick = useCallback(() => {
    if (location.pathname !== "/institutes") {
      navigate("/institutes");
      console.log("Navigate to Institutes");
    }
  }, [navigate]);


  const onCoursesTextClick = useCallback(() => {
    // Navigate or perform action related to "About Us"
    console.log("Navigate to About Us");
  }, []);

  const onBooksTextClick = useCallback(() => {
    // Navigate or perform action related to "Contact Us"
    console.log("Navigate to Contact Us");
  }, []);

  const onButtonClick = useCallback(() => {
    // Navigate or perform action related to "Log In"
    console.log("Navigate to Log In");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`self-stretch shadow-[0px_4px_50px_rgba(2,_4,_3,_0.48)] bg-white flex flex-row items-center justify-between p-[20px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] ${className}`}
      data-scroll-to="frameHeader"
    >
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <div className="w-[30px] h-[3px] bg-black" />
            <div className="w-[30px] h-[3px] bg-black" />
            <div className="w-[30px] h-[3px] bg-black" />
          </div>
        </div>
        <div className="ml-4 cursor-pointer" onClick={onImage543Click}>
          <img
            className="h-[38px] relative max-w-full overflow-hidden object-cover"
            alt="Logo"
            src={logo}
          />
        </div>
      </div>
      <nav className="flex flex-row items-center justify-end gap-[100px] text-xl text-gray-800 font-questrial">
        <a
          className="cursor-pointer hover:underline text-5xl" 
          onClick={onInstituesTextClick}
        >
          Institutes
        </a>
        <a
          className="cursor-pointer hover:underline text-5xl"  
          onClick={onCoursesTextClick}
        >
          About Us
        </a>
        <a
          className="cursor-pointer hover:underline text-5xl" 
          onClick={onBooksTextClick}
        >
          Contact Us
        </a>
       
      </nav>
      <div className="block mq1275:hidden">
        <button
          className="cursor-pointer border-none bg-gray-200 mr-7 px-10 py-4  text-lg text-white rounded" 
          onClick={onButtonClick}
        >
          Log In
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed  inset-0 bg-white z-[100] flex flex-col items-start p-6 text-9xl overflow-auto" style={{ fontFamily: 'Poppins',width: '25vw' }}>
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] bg-gray-200 rounded-full mr-4" />
              <div>
                <div className="font-semi-bold ">User Name</div>
                <div className="text-gray-500">user@gmail.com</div>
              </div>
            </div>
            <img
              src={closeIcon}
              alt="Close"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="font-bold mb-12 text-2xl hover:underline cursor-pointer">My Library</div>
          <div className="w-full h-2 border-2 border-gray-800 "></div>
          <a className="flex items-center mb-12 cursor-pointer text-xl hover:underline"
                      onClick={onStudyList}

          >
            <div className="mr-2"
            >📑</div> Studylist
          </a>
          <a className="flex items-center mb-12 cursor-pointer text-xl hover:underline"
          onClick={onMyBooks}
          >
            <div className="mr-2">📚</div> My Books
          </a>
          <a className="flex items-center mb-12 cursor-pointer text-xl hover:underline">
            <div className="mr-2">⬇️</div> Downloads
          </a>
          <a className="flex items-center cursor-pointer text-xl hover:underline">
            <div className="mr-2">⏰</div> Recent Documents
          </a>
        </div>
      )}
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
