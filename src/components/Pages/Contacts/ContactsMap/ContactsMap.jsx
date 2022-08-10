import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MapPoint from '../../../../svg/map-point.svg';
import Map from '../../../../svg/map.svg';
// import PropTypes from 'prop-types';

const ContactsMap = ({ langToggle }) => {
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
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  return (
    <div className="contacts__map">
      <a className="contacts__map-link" href="/" ref={addToRefs}>
        <Map className="contacts__map-svg" />
        <div className="contacts__map-info" ref={addToRefs}>
          <MapPoint className="contacts__map-marker" />
          <p className="contacts__map-text">
            {langToggle(
              'Відкрити на Google Картах',
              'Открыть на Google Картах',
              'View on Google Maps'
            )}
          </p>
        </div>
      </a>
    </div>
  );
};

// ContactsMap.propTypes = {};

export default ContactsMap;
