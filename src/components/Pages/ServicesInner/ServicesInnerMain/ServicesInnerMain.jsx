import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

import MainScreenHeader from "../../../UI/MainScreenHeader/MainScreenHeader";
import ImageCarouselFirst from "./ImageCarouselFirst/ImageCarouselFirst";

const ServicesInnerMain = ({ subTitle, title, carousel }) => {
  let overlayEl = React.useRef(null);
  let imageEl = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: "-100%",
        duration: 1.2,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      imageEl,
      { y: 140 },
      {
        y: 0,
        duration: 1.5,
        delay: 0.4,
      }
    );
  }, []);

  return (
    <section className="services-inner__main">
      <div className="services-inner__main-header">
        <MainScreenHeader subTitle={subTitle} title={title} />
      </div>
      <div className="main-screen-slider" ref={e => (imageEl = e)}>
        <div
          className="services__main-cover__overlay"
          ref={e => (overlayEl = e)}
        ></div>
        <ImageCarouselFirst carousel={carousel} />
      </div>
    </section>
  );
};

ServicesInnerMain.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default ServicesInnerMain;
