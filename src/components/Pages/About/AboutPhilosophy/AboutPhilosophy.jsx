import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../UI/SectionHeader/SectionHeader';
const ReactMarkdown = require('react-markdown');

const AboutPhilosophy = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, sectionTitle, description } = props;

  return (
    <section className="philosophy default-section">
      <div className="about-us__wrapper">
        <div className="philosophy__container">
          <SectionHeader
            markerCount={markerCount}
            markerTitle={markerTitle}
            sectionTitle={sectionTitle}
            ref={ref}
          />
          <div className="philosophy__content">
            <div className="markdown-components" ref={ref}>
              <ReactMarkdown children={description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutPhilosophy.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default AboutPhilosophy;
