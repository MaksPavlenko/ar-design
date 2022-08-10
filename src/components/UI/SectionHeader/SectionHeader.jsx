import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, sectionTitle } = props;

  return (
    <div className="section-header">
      <span className="section-header__marker" ref={ref}>
        <span className="section-header__marker-count">
          {markerCount + '.'}
        </span>
        <span className="section-header__marker-title">{markerTitle}</span>
      </span>
      <h2 className="section-header__title" ref={ref}>
        {sectionTitle}
      </h2>
    </div>
  );
});

SectionHeader.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default SectionHeader;
