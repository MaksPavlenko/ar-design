import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useLanguage from '../../../../hooks/useLanguage';

const AboutFounder = React.forwardRef((props, ref) => {
  const { founderImage, founder } = props;
  const { fadeY, fadeOver } = ref;
  const image = getImage(founderImage.localFile);

  return (
    <section className="founder default-section">
      <div className="founder__wrapper">
        <div className="founder__container">
          <div className="founder__image-wrapper">
            <div className="animate-overlay" ref={fadeOver}></div>
            <GatsbyImage
              image={image}
              className="founder__image"
              alt={founder.title_ru}
            />
          </div>
          <div className="founder__content">
            <h2 className="founder__title" ref={fadeY}>
              {useLanguage(
                founder.title_ua,
                founder.title_ru,
                founder.title_en
              )}
            </h2>
            <p className="founder__description" ref={fadeY}>
              {useLanguage(
                founder.description_ua,
                founder.description_ru,
                founder.description_en
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutFounder.propTypes = {
  image: PropTypes.object,
  founder: PropTypes.object,
};

export default AboutFounder;
