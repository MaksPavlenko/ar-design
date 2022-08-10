import React from "react";
import PropTypes from "prop-types";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLanguage from "../../../../../hooks/useLanguage";

import PlayIcon from "../../../../../svg/Polygon.svg";

const VideoSection = ({ openPopUp, cover }) => {
  const langToggle = useLanguage;

  let coverEl = React.useRef(null);
  let triggerEl = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      coverEl,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: triggerEl,
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="video-section blog-inner__video-section"
      ref={e => (triggerEl = e)}
    >
      <div className="video-cover" ref={e => (coverEl = e)}>
        <img
          src={`https://admin.ar-design.com.ua${cover.url}`}
          className="video-cover__image"
          alt="video"
        />
      </div>

      <button onClick={openPopUp} className="play-button">
        <span className="pulse"></span>
        <span className="play-button__icon">
          <span className="button-icon__text">
            {langToggle("Дивитись", "Смотреть", "Play")} <br />
            {langToggle("Відео", "Видео", "Video")}
          </span>
          <PlayIcon className="button-icon__polygon" />
        </span>
      </button>
    </section>
  );
};

VideoSection.propTypes = {
  openPopUp: PropTypes.func,
  cover: PropTypes.object,
};

export default VideoSection;
