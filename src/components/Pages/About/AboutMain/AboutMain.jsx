import React from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainScreenHeader from '../../../UI/MainScreenHeader/MainScreenHeader';
import useLanguage from '../../../../hooks/useLanguage';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutMain = ({ title, subTitle, intro, mainImage }) => {
  const image = getImage(mainImage.localFile);
  let overlayEl = React.useRef(null);
  let imageEl = React.useRef(null);
  let introEl = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: '-100%',
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
    gsap.fromTo(
      introEl,
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
          trigger: introEl,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="about-us-main">
      <div className="about-us__wrapper">
        <MainScreenHeader title={title} subTitle={subTitle} />
      </div>
      <div className="about-us__cover" ref={(e) => (imageEl = e)}>
        <div
          className="services__main-cover__overlay"
          ref={(e) => (overlayEl = e)}
        ></div>
        <GatsbyImage image={image} className="founder__image" alt={title} />
      </div>
      <div className="about-us__wrapper">
        <div className="about-us__intro default-section">
          <p ref={(e) => (introEl = e)}>
            {useLanguage(intro.title_ua, intro.title_ru, intro.title_en)}
          </p>
        </div>
      </div>
    </section>
  );
};

AboutMain.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.object,
  image: PropTypes.object,
};

export default AboutMain;
