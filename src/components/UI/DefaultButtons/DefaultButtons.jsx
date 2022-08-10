import React from 'react';

import MobilePrev from '../../../svg/mobile_prev.svg';
import MobileNext from '../../../svg/mobile_next.svg';
import { Link } from 'gatsby-plugin-react-i18next';

export const DefaultPrev = ({ hendler }) => {
  return (
    <button
      aria-label="Prev"
      className={'defaul-slider__button default-slider__button__prev'}
      onClick={hendler}
    >
      <span className="slider-button__arrow--wrapper">
        <MobilePrev className="slider-button__arrow slider-button__arrow--prev" />
      </span>
    </button>
  );
};

export const DefaultNext = ({ hendler }) => {
  return (
    <button
      aria-label="Next"
      className={'defaul-slider__button default-slider__button__next'}
      onClick={hendler}
    >
      <span className="slider-button__arrow--wrapper">
        <MobileNext className="slider-button__arrow slider-button__arrow--Next" />
      </span>
    </button>
  );
};

export const DefaultButtonHendler = ({ children, hendler, title }) => {
  return (
    <button className="default-button" onClick={hendler}>
      <span className="default-button__title">{title}</span>
      {children && (
        <span className="default-button__icon--wrapper">{children}</span>
      )}
    </button>
  );
};

export const DefaultButtonLink = ({ children, link, title }) => {
  return (
    <Link to={link} className="default-button">
      <span className="default-button__title">{title}</span>
      {children && (
        <span className="default-button__icon--wrapper">{children}</span>
      )}
    </Link>
  );
};

export const DefaultPlus = ({ cls }) => {
  return (
    <span className={`accordion-icon ${cls ? cls : null}`}>
      <span className="icon-line icon-line__1"></span>
      <span className="icon-line icon-line__2"></span>
    </span>
  );
};
