import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../../UI/SectionHeader/SectionHeader';
import ProjectSlider from './ProjectSlider/ProjectSlider';

const ServicesInnerProjects = ({
  markerCount,
  markerTitle,
  sectionTitle,
  dataCatalog,
}) => {
  return (
    <section className="services-inner__projects default-section">
      <div className="section-wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
        />
        <ProjectSlider dataCatalog={dataCatalog} />
      </div>
    </section>
  );
};

ServicesInnerProjects.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  dataCatalog: PropTypes.array,
};

export default ServicesInnerProjects;
