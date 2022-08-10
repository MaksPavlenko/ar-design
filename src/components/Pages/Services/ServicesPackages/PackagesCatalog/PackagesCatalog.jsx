import React from 'react';
import PropTypes from 'prop-types';
import PackagesCatalogItem from './PackagesCatalogItem/PackagesCatalogItem';

const PackagesCatalog = React.forwardRef((props, ref) => {
  const { packages, refreshFunc } = props;
  const [show, setShow] = React.useState(null);
  return (
    <div className="pack-catalog">
      {packages.map((item, index) => {
        return (
          <PackagesCatalogItem
            ref={ref}
            item={item}
            key={index}
            index={index}
            show={show}
            setShow={setShow}
            refreshFunc={refreshFunc}
          />
        );
      })}
    </div>
  );
});

PackagesCatalog.propTypes = {
  packages: PropTypes.array,
  refreshFunc: PropTypes.func,
};

export default PackagesCatalog;
