import React from 'react';
import PropTypes from 'prop-types';

const PackagesHeader = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, sectionTitle, description } = props;
  return (
    <div className="services-pack__header">
      <span
        className="services-pack__header--marker section-header__marker"
        ref={ref}
      >
        <span className="pack-header__marker--count section-header__marker-count">
          {markerCount + '.'}
        </span>
        <span className="pack-header__marker--title section-header__marker-title">
          {markerTitle}
        </span>
      </span>
      <div className="services-pack__header--info">
        <h2
          className="services-pack__header--title section-header__title"
          ref={ref}
        >
          {sectionTitle}
        </h2>
        <p className="services-pack__header--descr" ref={ref}>
          {description}
        </p>
      </div>
    </div>
  );
});

PackagesHeader.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  description: PropTypes.string,
};

export default PackagesHeader;
