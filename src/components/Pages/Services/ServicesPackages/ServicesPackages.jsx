import React from 'react';
import PropTypes from 'prop-types';
import PackagesHeader from './PackagesHeader/PackagesHeader';
import PackagesCatalog from './PackagesCatalog/PackagesCatalog';

const ServicesPackages = React.forwardRef((props, ref) => {
  const {
    markerCount,
    markerTitle,
    sectionTitle,
    description,
    packages,
    refreshFunc,
  } = props;
  return (
    <section className="services-pack default-section">
      <div className="services-section__wrapper">
        <PackagesHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          description={description}
          ref={ref}
        />
        <PackagesCatalog
          ref={ref}
          packages={packages}
          refreshFunc={refreshFunc}
        />
      </div>
    </section>
  );
});

ServicesPackages.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.array,
  refreshFunc: PropTypes.func,
};

export default ServicesPackages;
