import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MainScreenHeader from '../../../UI/MainScreenHeader/MainScreenHeader';

const ServicesMain = ({ subTitle, title, intro, mainImage }) => {
  const image = getImage(mainImage.image.localFile);
  let overlayEl = React.useRef(null);
  let imageEl = React.useRef(null);
  // let itemEl = React.useRef(null);

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
    // gsap.fromTo(
    //   itemEl,
    //   { opacity: 0, y: 140 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     delay: 0.4,
    //     scrollTrigger: {
    //       trigger: itemEl,
    //       start: 'top bottom',
    //       toggleActions: 'play none none reverse',
    //     },
    //   }
    // );
  }, []);

  return (
    <section className="services__main">
      <div className="services__main-header">
        <MainScreenHeader subTitle={subTitle} title={title} />
      </div>
      <div className="services__main-cover">
        <div
          className="services__main-cover__overlay"
          ref={(e) => (overlayEl = e)}
        ></div>
        <div
          className="services__main-cover__wrapper"
          ref={(e) => (imageEl = e)}
        >
          <GatsbyImage
            image={image}
            className="services__main-cover__image"
            alt={title}
          />
        </div>
      </div>
      {/* <div className="services__main-intro">
        <div className="services__main-intro__wrapper">
          <p
            className="services__main-intro__description"
            ref={e => (itemEl = e)}
          >
            {intro}
          </p>
        </div>
      </div> */}
    </section>
  );
};

ServicesMain.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  image: PropTypes.object,
};

export default ServicesMain;
