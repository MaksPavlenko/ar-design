import React from 'react';
import PropTypes from 'prop-types';

import FactsItems from './FactsItems/FactsItems';
import SectionHeader from '../SectionHeader/SectionHeader';

const Facts = React.forwardRef((props, ref) => {
  const { facts, markerCount, markerTitle, sectionTitle } = props;

  return (
    <section className="facts default-section">
      <div className="section-wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={ref}
        />

        <FactsItems facts={facts} ref={ref} />
      </div>
    </section>
  );
});

Facts.propTypes = {
  facts: PropTypes.object,
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default Facts;
