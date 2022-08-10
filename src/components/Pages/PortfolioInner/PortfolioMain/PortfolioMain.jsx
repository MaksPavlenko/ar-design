import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioMain = ({ projectName, title, projectNumber, images }) => {
  const image = getImage(images.localFile);

  let overlayEl = React.useRef(null);
  let imageEl = React.useRef(null);
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
        scrollTrigger: {
          trigger: imageEl,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    itemEl.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  return (
    <section className="project-main">
      <div className="project__wrapper">
        <div className="project__container">
          <div className="project__content">
            <h1 className="project__name" ref={addToRefs}>
              {projectName}
            </h1>
            <p className="project__title" ref={addToRefs}>
              {title}
            </p>
          </div>
          <p className="project__number" ref={addToRefs}>
            {projectNumber <= 10
              ? "AR - 00" + projectNumber
              : "AR - 0" + projectNumber}
          </p>
        </div>
      </div>
      <div className="project-main__cover">
        <div
          className="services__main-cover__overlay"
          ref={e => (overlayEl = e)}
        ></div>
        <div className="project__image" ref={e => (imageEl = e)}>
          <GatsbyImage
            image={image}
            className="founder__image"
            alt={projectName}
          />
        </div>
      </div>
    </section>
  );
};

PortfolioMain.propTypes = {
  projectName: PropTypes.string,
  title: PropTypes.string,
  projectNumber: PropTypes.string,
};

export default PortfolioMain;
