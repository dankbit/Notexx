import { useCallback } from "react";
import PropTypes from "prop-types";

const ItemContent = ({ className = "", twemojifileFolder }) => {
  const onItemContentContainerClick = useCallback(() => {
    // Please sync "studylist page 2" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[21px] cursor-pointer text-left text-5xl text-black font-questrial ${className}`}
      onClick={onItemContentContainerClick}
    >
      <img
        className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
        alt=""
        src={twemojifileFolder}
      />
      <div className="flex-1 relative tracking-[0.04em] mq450:text-lgi">
        DSA
      </div>
    </div>
  );
};

ItemContent.propTypes = {
  className: PropTypes.string,
  twemojifileFolder: PropTypes.string,
};


export default ItemContent;