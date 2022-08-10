import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLanguage from "../../../../hooks/useLanguage";
// import PropTypes from 'prop-types';

const ReactMarkdown = require("react-markdown");

const PortfolioDescription = ({
  projectNumber,
  dataFeature,
  titleNumber,
  title,
  description,
}) => {
  const langToggle = useLanguage;

  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
          delay: 0.2,
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

  const feature = dataFeature.map((item, i) => {
    if (item.type) {
      return (
        <li
          className="project__item project__item--column"
          key={i}
          ref={addToRefs}
        >
          <p className="project__item-name">
            {langToggle(item.marker_ua, item.marker_ru, item.marker_en)}
          </p>
          <p className="project__item-key">
            {langToggle(item.value_ua, item.value_ru, item.value_en)}
          </p>
        </li>
      );
    } else {
      return (
        <li className="project__item" key={i} ref={addToRefs}>
          <p className="project__item-name">
            {langToggle(item.marker_ua, item.marker_ru, item.marker_en)}
          </p>
          <p className="project__item-key">
            {langToggle(item.value_ua, item.value_ru, item.value_en)}
          </p>
        </li>
      );
    }
  });
  return (
    <section className="project__content">
      <div className="project__wrapper">
        <div className="project__description-container">
          <div className="project__description">
            <p className="project__description-title" ref={addToRefs}>
              <span className="project__description-number">{titleNumber}</span>
              {title}
            </p>
            <div className="markdown-components" ref={addToRefs}>
              <ReactMarkdown children={description} />
            </div>
          </div>
          <div className="project__object">
            <p
              className="project__number project__number--small"
              ref={addToRefs}
            >
              {projectNumber <= 10
                ? "AR - 00" + projectNumber
                : "AR - 0" + projectNumber}
            </p>
            <ul className="project__list">{feature}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// PortfolioDescription.propTypes = {};

export default PortfolioDescription;
