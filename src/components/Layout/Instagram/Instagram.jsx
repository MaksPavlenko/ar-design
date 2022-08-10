import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLanguage from '../../../hooks/useLanguage';

import LogoMobile from '../../../svg/logo-mobile.svg';
import Arrow from '../../../svg/instagram-arrow.svg';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DecorLeft from '../../../svg/decor_left.svg';

const Instagram = ({ instaData }) => {
  const langToggle = useLanguage;

  const images = instaData.instagram;

  let centerEl = React.useRef(null);
  let overlayEl = React.useRef(null);

  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemEl.current.forEach((el) => {
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
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.fromTo(
      centerEl,
      { y: 100 },
      {
        y: 0,
        duration: 0.7,
        delay: 0.2,
        scrollTrigger: {
          trigger: centerEl,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: '-100%',
        duration: 1.0,
        delay: 0.2,
        scrollTrigger: {
          trigger: centerEl,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  return (
    <section className="instagram default-section">
      <div className="decor-left" ref={addToRefs}>
        <DecorLeft />
      </div>
      <div className="instagram-wrapper">
        <header className="instagram-header">
          <SectionHeader
            markerCount={'00'}
            markerTitle={'Instagram'}
            sectionTitle={langToggle(
              'Проекти, релізи та цікавий матеріал!',
              'Проекты, релизы и интересный материал',
              'Projects, release and interesting material!'
            )}
            ref={addToRefs}
          />
        </header>

        <div className="instagram-images-wrapper">
          <div className="instagram-images--left">
            {images.map((img, index) => {
              const image = getImage(img.image.localFile);

              const count = ++index;

              if (index <= 2) {
                return (
                  <a
                    href="https://www.instagram.com/ar.design.studio/"
                    target="blank"
                    className={`instagram-image instagram-image--${count}`}
                    key={index}
                    ref={addToRefs}
                  >
                    <GatsbyImage
                      image={image}
                      className="image"
                      alt="anna razumova instagram"
                    />
                  </a>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="instagram-images--center">
            <div className="content-wrapper" ref={(e) => (centerEl = e)}>
              <div
                className="animate-overlay"
                ref={(e) => (overlayEl = e)}
              ></div>
              <span className="instagram-title">Instagram</span>
              <div className="instagram-logo">
                <LogoMobile className="instagram-logo--icon" />
              </div>
              <span className="instagram-adress">@ar.design.studio</span>
              <a
                href="https://www.instagram.com/ar.design.studio/"
                target="blank"
                className="instagram-link"
              >
                <span className="instagram-link--title">
                  {langToggle('Підписатися', 'Подписаться', 'Subscribe')}
                </span>
                <Arrow className="instagram-link--icon" />
              </a>
            </div>
          </div>

          <div className="instagram-images--right">
            {images.map((img, index) => {
              const image = getImage(img.image.localFile);

              const count = ++index;

              if (index > 2) {
                return (
                  <a
                    href="https://www.instagram.com/ar.design.studio/"
                    target="blank"
                    className={`instagram-image instagram-image--${count}`}
                    key={index}
                    ref={addToRefs}
                  >
                    <GatsbyImage
                      image={image}
                      className="image"
                      alt="anna razumova instagram"
                    />
                  </a>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
