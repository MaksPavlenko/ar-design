import React from 'react';
import PropTypes from 'prop-types';

const ReactMarkdown = require('react-markdown');

const AboutHistory = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, description } = props;

  return (
    <section className="story default-section">
      <div className="story__wrapper">
        <p className="story__marker" ref={ref}>
          <span className="story__count">{markerCount}</span>
          {markerTitle}
        </p>
        <div className="markdown-components" ref={ref}>
          <ReactMarkdown children={description} />
        </div>
      </div>
    </section>
  );
});

AboutHistory.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
};

export default AboutHistory;
