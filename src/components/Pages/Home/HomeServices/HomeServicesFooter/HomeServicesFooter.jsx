import React from 'react';
import { scroller } from 'react-scroll';
import useLanguage from '../../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';

import {
  DefaultButtonHendler,
  DefaultButtonLink,
} from '../../../../UI/DefaultButtons/DefaultButtons';

import Plus from '../../../../../svg/plus_sm.svg';
import Arrow from '../../../../../svg/arrow_link.svg';

const HomeServicesFooter = React.forwardRef((props, ref) => {
  function scrollFunction() {
    scroller.scrollTo('feedback-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  return (
    <div className="home-services__footer">
      <div className="home-services__footer--button" ref={ref}>
        <DefaultButtonLink
          link={'/services/'}
          title={useLanguage(
            'Більше про послуги',
            'Больше об услугах',
            'More about services'
          )}
        >
          <Arrow className="default-button__icon" />
        </DefaultButtonLink>
      </div>
      <div className="home-services__footer--button" ref={ref}>
        <DefaultButtonHendler
          title={useLanguage(
            'Обговорити проект',
            'Обсудить проект',
            'Discuss the project'
          )}
          hendler={scrollFunction}
        >
          <Plus className="default-button__icon" />
        </DefaultButtonHendler>
      </div>
    </div>
  );
});

// HomeServicesFooter.propTypes = {};

export default HomeServicesFooter;
