import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ThemeContext } from '../../../context/ThemeProvider';
import useLanguage from '../../../hooks/useLanguage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ArrowLeft from '../../../svg/left.svg';
import ArrowRight from '../../../svg/right.svg';
import { fromPortfolioSlugToUrl } from '../../../utils/slug';
import Award from '../Award/Award';

const CasesSlider = ({
  dataPortfolio,
  markerCount,
  markerTitle,
  sectionTitle,
}) => {
  // let sliderEl = React.useRef(null);
  const { portfolioSlide, setPortfolioSlide } = React.useContext(ThemeContext);
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
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    // gsap.fromTo(
    //   sliderEl,
    //   { y: 100 },
    //   {
    //     y: 0,
    //     duration: 1,
    //     delay: 0.3,
    //     scrollTrigger: {
    //       trigger: sliderEl,
    //       start: 'top bottom',
    //       toggleActions: 'play none none reverse',
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   overlayEl,
    //   { y: 0 },
    //   {
    //     y: '100%',
    //     duration: 1.6,
    //     delay: 0.3,
    //     scrollTrigger: {
    //       trigger: overlayEl,
    //       start: 'top bottom',
    //       toggleActions: 'play none none reverse',
    //     },
    //   }
    // );
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  const langToggle = useLanguage;

  const fraction = 100 / dataPortfolio.length;
  const totalCount = portfolioSlide + 1;

  function prevSlide() {
    setPortfolioSlide(portfolioSlide - 1);
  }

  function nextSlide() {
    setPortfolioSlide(portfolioSlide + 1);
  }

  return (
    <>
      <section className="home-cases cases-section default-section">
        <header className="section-header">
          <span className="section-marker" ref={addToRefs}>
            <span className="section-marker__count">{markerCount + '.'}</span>
            <span className="section-marker__title">{markerTitle}</span>
          </span>
          <h2 className="h2" ref={addToRefs}>
            {sectionTitle}
          </h2>
        </header>
        <div className="cases-slider-container">
          {/* <div className="slide-overlay"></div> */}
          <div className="cases-slider--wrapper" ref={addToRefs}>
            <div className="cases-slider">
              {dataPortfolio.map((slide, index) => {
                const slideClasses = {
                  [portfolioSlide - 2]: 'carousel-slide--previous',
                  [portfolioSlide - 1]: 'carousel-slide--left',
                  [portfolioSlide]: 'carousel-slide--active',
                  [portfolioSlide + 1]: 'carousel-slide--right',
                  [portfolioSlide + 2]: 'carousel-slide--next',
                };

                if (index < portfolioSlide - 2 || index > portfolioSlide + 2) {
                  return null;
                }
                const image = getImage(slide.main_image.localFile);
                return (
                  <div
                    className={`cases-slider__slide ${slideClasses[index]}`}
                    key={index}
                  >
                    <Link
                      to={fromPortfolioSlugToUrl(slide.slug)}
                      className="cases-slide-link"
                    >
                      <div className="slide-cases-header">
                        <div className="slide-header__wrapper">
                          <h2 className="h2">
                            {langToggle(
                              slide.project_name_ua,
                              slide.project_name_ru,
                              slide.project_name_ua
                            )}
                          </h2>
                          <p className="slide-descr">
                            {langToggle(
                              slide.sub_title_ua,
                              slide.sub_title_ru,
                              slide.sub_title_ru
                            )}
                          </p>
                        </div>

                        <span className="slide-case">
                          {slide.project_number <= 10
                            ? 'AR - 00' + slide.project_number
                            : 'AR - 0' + slide.project_number}{' '}
                        </span>
                      </div>
                      <div className="slide-body">
                        <div className="slide-left">
                          <GatsbyImage
                            image={image}
                            className="slider-image"
                            alt={slide.project_name_ru}
                          />
                          {slide.award === true && <Award />}
                        </div>
                        <div className="slide-right">
                          <ul className="slide-info">
                            {slide.project_description.map((item, i) => {
                              if (item.marker) {
                                return (
                                  <li key={i} className="slide-info--item">
                                    <span className="info-item--title">
                                      {langToggle(
                                        item.marker_ua,
                                        item.marker_ru,
                                        item.marker_en
                                      )}
                                    </span>
                                    <span className="info-item--value">
                                      {langToggle(
                                        item.value_ua,
                                        item.value_ru,
                                        item.value_en
                                      )}
                                    </span>
                                  </li>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="cases-slider--navigation">
          <div className="cases-slider--navigation__right">
            <div className="counter-wrapper counter-wrapper__main">
              <ul
                className="counter-list"
                style={{
                  transform: `translateY(-${portfolioSlide * fraction}%)`,
                }}
              >
                {dataPortfolio.map((numbers, index) => {
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
            <div className="all-count">{'0' + dataPortfolio.length}</div>
          </div>
          <div className="cases-slider--navigation__left">
            <div className="cases-slider--buttons__wrapper">
              <div className="cases-slider--buttons">
                <button
                  className="cases-slider--button cases-slider--button__prev"
                  disabled={portfolioSlide === 0}
                  onClick={prevSlide}
                >
                  Prev
                  <ArrowLeft />
                </button>
                <button
                  className="cases-slider--button cases-slider--button__next"
                  disabled={portfolioSlide === dataPortfolio.length - 1}
                  onClick={nextSlide}
                >
                  Next
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesSlider;
