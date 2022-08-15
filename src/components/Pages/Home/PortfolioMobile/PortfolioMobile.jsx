import React from 'react';
import useLanguage from '../../../../hooks/useLanguage';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { DefaulSlideLink } from '../../../UI/DefaulSlide/ DefaulSlide';
import DefaultSlider from '../../../UI/DefaultSlider/DefaultSlider';
import { DefaultButtonLink } from '../../../UI/DefaultButtons/DefaultButtons';
import { fromPortfolioSlugToUrl } from '../../../../utils/slug';

import Arrow from '../../../../svg/arrow_link.svg';

const PortfolioMobile = React.forwardRef((props, ref) => {
  const { sectionTitle, dataPortfolio } = props;
  const langToggle = useLanguage;
  const { portfolioSlide, setPortfolioSlide } = React.useContext(ThemeContext);

  let fadeY = React.useRef([]);
  fadeY.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    fadeY.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 140,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.25,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const fadeYRefs = (el) => {
    if (el && !fadeY.current.includes(el)) {
      fadeY.current.push(el);
    }
  };

  return (
    <section className="mobile-portfolio home-cases cases-section">
      <header className="section-header section-header__mobile---portfolio">
        <h2 className="section-header__title" ref={fadeYRefs}>
          {sectionTitle}
        </h2>
      </header>

      <DefaultSlider
        ref={fadeYRefs}
        currentSlide={portfolioSlide}
        setCurrentSlide={setPortfolioSlide}
      >
        {dataPortfolio.map((item, index) => {
          return (
            <DefaulSlideLink
              key={index}
              title={langToggle(
                item.project_name_ua,
                item.project_name_ru,
                item.project_name_en
              )}
              description={langToggle(
                item.sub_title_ua,
                item.sub_title_ru,
                item.sub_title_en
              )}
              number={item.project_number}
              img={item.main_image.localFile}
              link={fromPortfolioSlugToUrl(item.slug)}
              award={item.award}
            />
          );
        })}
      </DefaultSlider>
      <div className="section-wrapper">
        <div className="mobile-portfolio__button--wrapper" ref={fadeYRefs}>
          <DefaultButtonLink
            link={'/portfolio/'}
            title={langToggle(
              'Перейти в портфоліо',
              'Перейти в портфолио',
              'Go to portfolio'
            )}
          >
            <Arrow className="default-button__icon" />
          </DefaultButtonLink>
        </div>
      </div>
    </section>
  );
});

export default PortfolioMobile;
