import { useCallback } from "react";
import PropTypes from "prop-types";
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import { useNavigate } from "react-router-dom";
import BookPreviewPage from "../pages/BookPreviewPage";

const BookList = ({ className = "" }) => {
  const navigate = useNavigate();
  const onImageClick = useCallback(() => {
    // Please sync "preview page" to the project
    navigate("/BookPreviewPage");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <div className="w-[1344px] flex flex-row flex-wrap items-start justify-start gap-[178px_124px] min-h-[1358px] max-w-full mq450:gap-[15px] mq900:gap-[31px] mq1325:gap-[62px]">
        <div className="h-[590px] w-[364px] relative max-w-full cursor-pointer flex items-center justify-center">
          <img
            className="h-full w-full cursor-pointer object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book1}
            onClick={onImageClick}
          />
        </div>
        <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book2}
          />
        </div>
        <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book3}
          />
        </div>
        <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book1}
          />
        </div>
        <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book2}
          />
        </div>
        <div className="h-[590px] w-[364px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.055)]"
            loading="lazy"
            alt=""
            src={book3}
          />
        </div>
      </div>
    </div>
  );
};

BookList.propTypes = {
  className: PropTypes.string,
};

export default BookList;