import React from 'react';
import { gsap } from 'gsap';

import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import Numb from '../../../svg/page-not.svg';

const PageNot = ({ to, title, buttonTitle }) => {
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

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
          // scrollTrigger: {
          //   trigger: el,
          //   start: 'top bottom',
          //   toggleActions: 'play none none reverse',
          // },
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
    <section className="page-not">
      <div className="page-not__wrapper">
        <div className="page-not__num" ref={addToRefs}>
          <Numb />
        </div>
        <span className="page-not__title" ref={addToRefs}>
          Oops!
        </span>
        <h1 className="page-not_h1" ref={addToRefs}>
          {title}
        </h1>
        <div className="animate-wrapper" ref={addToRefs}>
          <ButtonLink to={to} title={buttonTitle} />
        </div>
      </div>
    </section>
  );
};

export default PageNot;
