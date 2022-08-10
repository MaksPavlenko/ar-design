import React from 'react';
import { scroller } from 'react-scroll';
import useLanguage from '../../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import DesignIcon from '../../../../../../../svg/design_icon_white.svg';
import ArchitectureIcon from '../../../../../../../svg/architecture_icon_white.svg';
import AccompanimentIcon from '../../../../../../../svg/accompaniment_icon_white.svg';
import Wood from '../../../../../../../images/wood.png';
import {
  DefaultButtonHendler,
  DefaultPlus,
} from '../../../../../../UI/DefaultButtons/DefaultButtons';

const CatalogItemAside = React.forwardRef((props, ref) => {
  const { item } = props;
  const itemIcon =
    item.icon === 'design' ? (
      <DesignIcon className="catalog-aside__icon" />
    ) : item.icon === 'architecture' ? (
      <ArchitectureIcon className="catalog-aside__icon" />
    ) : item.icon === 'accompaniment' ? (
      <AccompanimentIcon className="catalog-aside__icon" />
    ) : null;

  function scrollFunction() {
    scroller.scrollTo('feedback-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  return (
    <div className="catalog-aside__wrapper" ref={ref}>
      <div className="catalog-aside__icon--container">
        <div className="catalog-aside__icon--inner">
          <div
            className="catalog-aside__icon--wrapper"
            style={{ backgroundImage: `url(${Wood})` }}
          >
            {itemIcon}
          </div>
        </div>
      </div>
      <DefaultButtonHendler
        hendler={scrollFunction}
        title={useLanguage(
          'Обговорити проект',
          'Обсудить проект',
          'Discuss the project'
        )}
      >
        <DefaultPlus />
      </DefaultButtonHendler>
    </div>
  );
});

CatalogItemAside.propTypes = {
  item: PropTypes.object,
};

export default CatalogItemAside;
