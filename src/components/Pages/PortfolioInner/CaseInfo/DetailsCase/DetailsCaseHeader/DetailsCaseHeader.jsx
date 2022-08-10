import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import useLanguage from '../../../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';
import { DefaultPlus } from '../../../../../UI/DefaultButtons/DefaultButtons';

const DetailsCaseHeader = React.forwardRef((props, ref) => {
  const { number, show, setShow, refreshFunc } = props;
  const langToggle = useLanguage;
  const isMobile = useBreakpoint();

  return (
    <button
      className={show === 1 ? 'details-header is-show' : 'details-header'}
      onClick={() => {
        setShow(show === 1 ? null : 1);
        refreshFunc();
      }}
      ref={ref}
    >
      <h2 className="details-header__title">
        {langToggle('Деталі проекту:', 'Детали проекта:', 'Project details:')}
      </h2>
      <span className="details-header__button">
        {isMobile.sm ? (
          <DefaultPlus cls={'details-header__button--icon'} />
        ) : (
          <span className="details-header__button--title">
            {number <= 10 ? 'AR - 00' + number : 'AR - 0' + number}
          </span>
        )}
      </span>
    </button>
  );
});

// DetailsCaseHeader.propTypes = {};

export default DetailsCaseHeader;
