import React from 'react';
import useLanguage from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import DesignIcon from '../../../../../../svg/design_icon.svg';
import ArchitectureIcon from '../../../../../../svg/architecture_icon.svg';
import VisualisationIcon from '../../../../../../svg/visualisation_icon.svg';
import AccompanimentIcon from '../../../../../../svg/accompaniment_icon.svg';

const ServicesItem = React.forwardRef((props, ref) => {
  const {
    icon,
    title_ua,
    title_ru,
    title_en,
    description_ua,
    description_ru,
    description_en,
  } = props.item;
  const itemIcon =
    icon === 'design' ? (
      <DesignIcon className="services-item__icon" />
    ) : icon === 'architecture' ? (
      <ArchitectureIcon className="services-item__icon" />
    ) : icon === 'visualization' ? (
      <VisualisationIcon className="services-item__icon" />
    ) : icon === 'accompaniment' ? (
      <AccompanimentIcon className="services-item__icon" />
    ) : null;

  return (
    <div className="home-services__item" ref={ref}>
      <div className="services-item__icon--wrapper">{itemIcon}</div>
      <div className="services-item__info--wrapper">
        <h3 className="services-item__info--title">
          {useLanguage(title_ua, title_ru, title_en)}
        </h3>
        <p className="services-item__info--descr">
          {useLanguage(description_ua, description_ru, description_en)}
        </p>
      </div>
    </div>
  );
});

ServicesItem.propTypes = {
  item: PropTypes.object,
};

export default ServicesItem;
