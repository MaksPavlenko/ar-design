import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../UI/SectionHeader/SectionHeader';
import Accordion from './Accordion/Accordion';

const ServicesInnerAboutStyle = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, sectionTitle, items, refreshFunc } = props;

  return (
    <section className="service-inner__about default-section">
      <div className="section-wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={ref}
        />
        <Accordion items={items} refreshFunc={refreshFunc} ref={ref} />
      </div>
    </section>
  );
});

ServicesInnerAboutStyle.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  items: PropTypes.array,
  refreshFunc: PropTypes.func,
};

export default ServicesInnerAboutStyle;
