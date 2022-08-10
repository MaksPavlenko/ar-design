import React from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  let circleRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(circleRef, {
      y: 100,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: '.section-3',
        start: 'top center+=100',
        markers: true,
      },
    });
  }, []);
  return (
    <>
      <section className="section section-1">
        <h2 className="h2">Заголовок секции 1</h2>
        <h3 className="h3">Подзаголовок секции 1</h3>
      </section>
      <section className="section section-2">
        <h2 className="h2">Заголовок секции 2</h2>
        <h3 className="h3">Подзаголовок секции 2</h3>
      </section>
      <section className="section section-3">
        <h2 className="h2" ref={(el) => (circleRef = el)}>
          Заголовок секции 3
        </h2>
        <h3 className="h3">Подзаголовок секции 3</h3>
      </section>
      <section className="section section-4">
        <h2 className="h2">Заголовок секции 4</h2>
        <h3 className="h3">Подзаголовок секции 4</h3>
      </section>
      <section className="section section-5">
        <h2 className="h2">Заголовок секции 5</h2>
        <h3 className="h3">Подзаголовок секции 5</h3>
      </section>
      <section className="section section-6">
        <h2 className="h2">Заголовок секции 6</h2>
        <h3 className="h3">Подзаголовок секции 6</h3>
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
