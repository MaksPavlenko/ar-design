import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../UI/SectionHeader/SectionHeader';
import HomeServicesItems from './HomeServicesItems/HomeServicesItems';
import HomeServicesFooter from './HomeServicesFooter/HomeServicesFooter';

const HomeServices = React.forwardRef((props, ref) => {
  const { services, markerCount, markerTitle, sectionTitle } = props;

  return (
    <section className="home-services default-section">
      <div className="section-wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={ref}
        />
        <HomeServicesItems items={services.items} ref={ref} />
        <HomeServicesFooter ref={ref} />
      </div>
    </section>
  );
});

HomeServices.propTypes = {
  services: PropTypes.object,
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default HomeServices;
