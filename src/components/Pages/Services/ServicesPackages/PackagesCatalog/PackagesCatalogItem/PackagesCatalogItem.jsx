import React from 'react';
import AsideDefault from '../../../../../UI/AsideDefault/AsideDefault';
import PropTypes from 'prop-types';
import CatalogItemAside from './CatalogItemAside/CatalogItemAside';
import CatalogContent from './CatalogContent/CatalogContent';

const PackagesCatalogItem = React.forwardRef((props, ref) => {
  const { item, index, show, setShow, refreshFunc } = props;
  return (
    <div className="pack-catalog__item">
      <div className="pack-catalog__item--column">
        <AsideDefault offsetTop={140}>
          <CatalogItemAside item={item} ref={ref} />
        </AsideDefault>
      </div>
      <div className="pack-catalog__item--column">
        <CatalogContent
          ref={ref}
          item={item}
          index={index}
          show={show}
          setShow={setShow}
          refreshFunc={refreshFunc}
        />
      </div>
    </div>
  );
});

PackagesCatalogItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  setShow: PropTypes.func,
  refreshFunc: PropTypes.func,
};

export default PackagesCatalogItem;
