import React from "react";

import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLanguage from "../../../../../hooks/useLanguage";

import ArrowLeft from "../../../../../svg/left.svg";
import ArrowRight from "../../../../../svg/right.svg";
import { fromPortfolioSlugToUrl } from "../../../../../utils/slug";

const ProjectSlider = ({ dataCatalog }) => {
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemEl.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 140,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
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

  const langToggle = useLanguage;

  const fraction = 100 / dataCatalog.length;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [progress, setprogress] = React.useState(fraction);
  const [slideCounter, setSlideCounter] = React.useState(0);

  const totalCount = currentIndex + 1;

  function prevSlide() {
    setCurrentIndex(currentIndex - 1);
    setprogress(progress - fraction);
    setSlideCounter(slideCounter - fraction);
  }

  function nextSlide() {
    setCurrentIndex(currentIndex + 1);
    setprogress(progress + fraction);
    setSlideCounter(slideCounter + fraction);
  }

  return (
    <>
      <div className="project-slider--wrapper">
        <div className="project-slider" ref={addToRefs}>
          {dataCatalog.map((slide, index) => {
            const image = getImage(slide.main_image.localFile);
            const slideClasses = {
              [currentIndex - 2]: "project-slider--slide__previous",
              [currentIndex - 1]: "project-slider--slide__left",
              [currentIndex]: "project-slider--slide__active",
              [currentIndex + 1]: "project-slider--slide__right",
              [currentIndex + 2]: "project-slider--slide__next",
            };

            if (index < currentIndex - 2 || index > currentIndex + 2) {
              return null;
            }
            return (
              <div
                className={`project-slider--slide ${slideClasses[index]}`}
                key={slide.id}
              >
                <Link to={fromPortfolioSlugToUrl(slide.slug)}>
                  <div className="slide-header">
                    <div className="slide-header--info">
                      <h2 className="h2">
                        {langToggle(
                          slide.project_name_ua,
                          slide.project_name_ru,
                          slide.project_name_en
                        )}
                      </h2>
                      <p className="slide-descr">
                        {langToggle(
                          slide.sub_title_ua,
                          slide.sub_title_ru,
                          slide.sub_title_en
                        )}
                      </p>
                    </div>
                    <span className="slide-case">
                      {slide.project_number <= 10
                        ? "AR - 00" + slide.project_number
                        : "AR - 0" + slide.project_number}
                    </span>
                  </div>
                  <div className="slide-body">
                    <GatsbyImage
                      image={image}
                      className="slider-image"
                      alt={slide.sub_title_ru}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="project-slider--navigation">
        <div className="project-slider--navigation__right">
          <div className="counter-wrapper">
            <ul
              className="counter-list"
              style={{ transform: `translateY(-${slideCounter}%)` }}
            >
              {dataCatalog.map((numbers, index) => {
                return (
                  <li className="counter-list__item" key={index}>
                    {"0" + numbers.id}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="current-count">{"0" + totalCount}</div>
          <div className="progress-wrapper">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="all-count">{"0" + dataCatalog.length}</div>
        </div>
        <div className="project-slider--buttons">
          <button
            className="project-slider--button project-slider--button__prev"
            disabled={currentIndex === 0}
            onClick={prevSlide}
          >
            Prev
            <ArrowLeft />
          </button>
          <button
            className="project-slider--button project-slider--button__next"
            disabled={currentIndex === dataCatalog.length - 1}
            onClick={nextSlide}
          >
            Next
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
