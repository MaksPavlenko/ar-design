import React from 'react';
import { scroller } from 'react-scroll';
import useLanguage from '../../../../../hooks/useLanguage';

const FooterButton = () => {
  function scrollTop() {
    scroller.scrollTo('app-container', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  const langToggle = useLanguage;

  return (
    <button onClick={scrollTop} className="top-button">
      <span className="pulse"></span>
      <span className="top-button__icon">
        <span className="top-button__icon-text">
          {langToggle('Вгору', 'Вверх', 'Up')}
        </span>
      </span>
    </button>
  );
};

export default FooterButton;
