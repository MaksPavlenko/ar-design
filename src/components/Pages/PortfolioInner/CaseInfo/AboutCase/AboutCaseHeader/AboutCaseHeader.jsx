import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import useLanguage from '../../../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';
import { DefaultPlus } from '../../../../../UI/DefaultButtons/DefaultButtons';

const AboutCaseHeader = React.forwardRef((props, ref) => {
  const { show, setShow, refreshFunc } = props;
  const langToggle = useLanguage;
  const isMobile = useBreakpoint();

  return (
    <button
      className={
        show === 2
          ? 'details-header details-header__about is-show'
          : 'details-header details-header__about'
      }
      onClick={() => {
        setShow(show === 2 ? null : 2);
        refreshFunc();
      }}
      ref={ref}
    >
      <h2 className="details-header__title">
        {langToggle(
          'Опис проекту:',
          'Описание проекта:',
          'Project Description:'
        )}
      </h2>
      <span className="details-header__button">
        {isMobile.sm ? (
          <DefaultPlus cls={'details-header__button--icon'} />
        ) : (
          <>
            <span className="details-header__button--title">
              {show === 2
                ? langToggle('Приховати', 'Скрыть', 'Hide')
                : langToggle('Розкрити', 'Раскрыть', 'Reveal')}
            </span>
            <DefaultPlus cls={'details-header__button--icon'} />
          </>
        )}
      </span>
    </button>
  );
});

// AboutCaseHeader.propTypes = {};

export default AboutCaseHeader;
