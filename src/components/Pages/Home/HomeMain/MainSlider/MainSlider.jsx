import React from 'react';

import { gsap } from 'gsap';
import { scroller } from 'react-scroll';
import { ThemeContext } from '../../../../../context/ThemeProvider';

import ArrowLeft from '../../../../../svg/left.svg';
import ArrowRight from '../../../../../svg/right.svg';

import MainSliderSlide from './MainSliderSlide/MainSliderSlide';

const MainSlider = ({ dataSlider }) => {
  const { portfolioSlide, setPortfolioSlide } = React.useContext(ThemeContext);
  const slides = dataSlider;

  function scrollDown() {
    scroller.scrollTo('home-story', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  let overlayEl = React.useRef(null);
  let sliderEl = React.useRef(null);
  let sliderNavEl = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: '100%',
        duration: 0.7,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      sliderEl,
      { y: 100 },
      {
        y: 0,
        duration: 0.7,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      sliderNavEl,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.3,
      }
    );
  }, []);

  const fraction = 100 / slides.length;
  const totalCount = portfolioSlide + 1;

  function prevSlide() {
    setPortfolioSlide(portfolioSlide - 1);
  }

  function nextSlide() {
    setPortfolioSlide(portfolioSlide + 1);
  }

  return (
    <section className="about-test custom-slider">
      <div className="test-slider--wrapper" ref={(e) => (sliderEl = e)}>
        <div className="slide-overlay" ref={(e) => (overlayEl = e)}></div>
        <div className="test-slider">
          {slides.map((slide, index) => {
            const slideClasses = {
              [portfolioSlide - 2]: 'slider-slide--previous',
              [portfolioSlide - 1]: 'slider-slide--left',
              [portfolioSlide]: 'slider-slide--active',
              [portfolioSlide + 1]: 'slider-slide--right',
              [portfolioSlide + 2]: 'slider-slide--next',
            };

            if (index < portfolioSlide - 2 || index > portfolioSlide + 2) {
              return null;
            }

            return (
              <MainSliderSlide
                key={index}
                slideClasses={slideClasses}
                slide={slide}
                index={index}
              />
            );
          })}
        </div>
      </div>

      <div className="test-slider--navigation" ref={(e) => (sliderNavEl = e)}>
        <div className="test-slider--navigation__left">
          <div className="test-slider--buttons__wrapper">
            <button className="slider-scroll--down" onClick={scrollDown}>
              Scroll Down
            </button>
            <div className="test-slider--buttons">
              <button
                className="test-slider--button test-slider--button__prev"
                disabled={portfolioSlide === 0}
                onClick={prevSlide}
              >
                Prev
                <ArrowLeft />
              </button>
              <button
                className="test-slider--button test-slider--button__next"
                disabled={portfolioSlide === slides.length - 1}
                onClick={nextSlide}
              >
                Next
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="test-slider--navigation__right">
          <div className="counter-wrapper counter-wrapper__main">
            <ul
              className="counter-list"
              style={{
                transform: `translateY(-${portfolioSlide * fraction}%)`,
              }}
            >
              {slides.map((numbers, index) => {
                const count = ++index;
                return (
                  <li
                    className="counter-list__item"
                    key={`${index}_${numbers.slug}`}
                  >
                    {'0' + count}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="current-count">{'0' + totalCount}</div>
          <div className="progress-wrapper">
            <div
              className="progress"
              style={{ width: `${portfolioSlide * fraction}%` }}
            ></div>
          </div>
          <div className="all-count">{'0' + slides.length}</div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
