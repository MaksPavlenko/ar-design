import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ArrowLeft from "../../../../svg/left.svg";
import ArrowRight from "../../../../svg/right.svg";

const BlogInnerSlider = ({ carousel }) => {
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

  const images = carousel;

  const fraction = 100 / images.length;

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
    <section className="blog-inner_slider-section" ref={addToRefs}>
      <div className="blog-slider--wrapper">
        <div className="blog-slider">
          {images.map((slide, index) => {
            const image = getImage(slide.image.localFile);

            const slideClasses = {
              [currentIndex - 2]: "blog-slider--slide__previous",
              [currentIndex - 1]: "blog-slider--slide__left",
              [currentIndex]: "blog-slider--slide__active",
              [currentIndex + 1]: "blog-slider--slide__right",
              [currentIndex + 2]: "blog-slider--slide__next",
            };

            if (index < currentIndex - 2 || index > currentIndex + 2) {
              return null;
            }
            return (
              <div
                className={`blog-slider--slide ${slideClasses[index]}`}
                key={index}
              >
                <div className="slide-body">
                  <GatsbyImage
                    image={image}
                    className="slider-image"
                    alt="blog gallery"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="blog-slider--navigation">
        <div className="blog-slider--navigation__right">
          <div className="counter-wrapper">
            <ul
              className="counter-list"
              style={{ transform: `translateY(-${slideCounter}%)` }}
            >
              {images.map((numbers, index) => {
                const count = ++index;
                return (
                  <li className="counter-list__item" key={index}>
                    {"0" + count}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="current-count">{"0" + totalCount}</div>
          <div className="progress-wrapper">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="all-count">{"0" + images.length}</div>
        </div>
        <div className="blog-slider--buttons">
          <button
            className="blog-slider--button blog-slider--button__prev"
            disabled={currentIndex === 0}
            onClick={prevSlide}
          >
            Prev
            <ArrowLeft />
          </button>
          <button
            className="blog-slider--button blog-slider--button__next"
            disabled={currentIndex === images.length - 1}
            onClick={nextSlide}
          >
            Next
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogInnerSlider;
