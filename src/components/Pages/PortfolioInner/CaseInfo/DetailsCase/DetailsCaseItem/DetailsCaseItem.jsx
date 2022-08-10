import React from 'react';
import useLanguage from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const DetailsCaseItem = React.forwardRef((props, ref) => {
  const {
    marker_ua,
    marker_ru,
    marker_en,
    type,
    value_ua,
    value_ru,
    value_en,
  } = props.item;
  const langToggle = useLanguage;
  return (
    <li
      className={
        type
          ? 'case-details__item case-details__item--materials'
          : 'case-details__item'
      }
      // ref={ref}
    >
      <span className="case-details__item--marker">
        {langToggle(marker_ua, marker_ru, marker_en)}
      </span>
      <p className="case-details__item--value">
        {langToggle(value_ua, value_ru, value_en)}
      </p>
    </li>
  );
});
DetailsCaseItem.propTypes = {
  marker_ua: PropTypes.string,
  marker_ru: PropTypes.string,
  marker_en: PropTypes.string,
  type: PropTypes.string,
  value_ua: PropTypes.string,
  value_ru: PropTypes.string,
  value_en: PropTypes.string,
};

export default DetailsCaseItem;
