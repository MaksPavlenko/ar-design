import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ArrowLeft from "../../../../../svg/left.svg";
import ArrowRight from "../../../../../svg/right.svg";

const ImageCarouselFirst = ({ carousel }) => {
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
    <>
      <div className="image-carousel--wrapper">
        <div className="image-carousel">
          {images.map((slide, index) => {
            const image = getImage(slide.image.localFile);
            const slideClasses = {
              [currentIndex - 2]: "image-carousel__slide--previous",
              [currentIndex - 1]: "image-carousel__slide--left",
              [currentIndex]: "image-carousel__slide--active",
              [currentIndex + 1]: "image-carousel__slide--right",
              [currentIndex + 2]: "image-carousel__slide--next",
            };

            if (index < currentIndex - 2 || index > currentIndex + 2) {
              return null;
            }
            return (
              <div
                className={`image-carousel__slide ${slideClasses[index]}`}
                key={index}
              >
                <div className="slide-wrapper">
                  <GatsbyImage
                    image={image}
                    className="slider-image"
                    alt="gallery"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="image-carousel--navigation">
        <div className="image-carousel--navigation__right">
          <div className="counter-wrapper">
            <ul
              className="counter-list"
              style={{ transform: `translateY(-${slideCounter}%)` }}
            >
              {images.map((numbers, index) => {
                const count = index + 1;
                return (
                  <li className="counter-list__item" key={index}>
                    {count <= 9 ? "0" + count : count}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="current-count">{"0" + totalCount}</div>
          <div className="progress-wrapper">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="all-count">
            {images.length <= 9 ? "0" + images.length : images.length}
          </div>
        </div>
        <div className="image-carousel--navigation__left">
          <div className="image-carousel--buttons__wrapper">
            <div className="image-carousel--buttons">
              <button
                className="image-carousel--button test-slider--button__prev"
                disabled={currentIndex === 0}
                onClick={prevSlide}
              >
                Prev
                <ArrowLeft />
              </button>
              <button
                className="image-carousel--button image-carousel--button__next"
                disabled={currentIndex === images.length - 1}
                onClick={nextSlide}
              >
                Next
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarouselFirst;
