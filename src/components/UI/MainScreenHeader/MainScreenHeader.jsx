import React from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

const MainScreenHeader = ({ subTitle, title, date }) => {
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
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
          duration: 1.4,
          delay: 0.6,
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };
  if (date) {
    return (
      <div className="main-screen__header">
        <span className="main-screen__subtitle" ref={addToRefs}>
          {date}
        </span>
        <h1 className="main-screen__title" ref={addToRefs}>
          {title}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="main-screen__header">
        <span className="main-screen__subtitle" ref={addToRefs}>
          <span className="main-screen__number">01.</span>
          {subTitle}
        </span>
        <h1 className="main-screen__title" ref={addToRefs}>
          {title}
        </h1>
      </div>
    );
  }
};

MainScreenHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
};

export default MainScreenHeader;
