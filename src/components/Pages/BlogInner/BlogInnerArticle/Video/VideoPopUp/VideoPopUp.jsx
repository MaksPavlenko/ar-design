import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/lazy";

const VideoPopUp = ({ closePopUp, open, play, url }) => {
  return (
    <div className={open ? "video-popup video-popup__open" : "video-popup"}>
      <div className="react-player__wrapper">
        <ReactPlayer
          className="react-player"
          playing={play}
          controls={true}
          url={url}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { origin: "https://www.ar-design.com.ua" },
            },
          }}
        />
      </div>
      <button className="popup-close__button" onClick={closePopUp}>
        <span className="popup-close__button-lines">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </span>
      </button>
    </div>
  );
};

VideoPopUp.propTypes = {
  closePopUp: PropTypes.func,
  open: PropTypes.bool,
  play: PropTypes.bool,
  url: PropTypes.string,
};

export default VideoPopUp;
