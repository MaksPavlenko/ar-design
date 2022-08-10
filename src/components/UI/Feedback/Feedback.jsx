import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import SectionHeader from '../SectionHeader/SectionHeader';
import ArrowLink from '../../../svg/arrowlinkblack.svg';

const Feedback = React.forwardRef((props, ref) => {
  const {
    dataContacts,
    imageContact,
    markerCount,
    markerTitle,
    sectionTitle,
  } = props;

  const { fadeY, fadeOver } = ref;
  const image = getImage(imageContact.localFile);

  return (
    <section className="feedback-section default-section">
      <div className="feedback-image__wrapper">
        <div className="animate-overlay" ref={fadeOver}></div>
        <GatsbyImage
          image={image}
          className="feedback__image"
          alt={markerTitle}
        />
      </div>
      <div className="feedback-section__content">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={fadeY}
        />
        <ul className="feedback-messanger">
          {dataContacts.messengers.map((item, index) => {
            return (
              <li className="feedback-messanger__item" key={index} ref={fadeY}>
                <a
                  href={item.link}
                  className="feedback-messanger__item-link"
                  target="blank"
                >
                  <span className="messanger-item__link-title">
                    {item.messenger}
                  </span>
                  <ArrowLink className="messanger-item__link-icon" />
                </a>
              </li>
            );
          })}
          <li className="feedback-messanger__item" ref={fadeY}>
            <a
              href={`mailto:${dataContacts.email}`}
              className="feedback-messanger__item-link"
            >
              <span className="messanger-item__link-title">E-mail</span>
              <ArrowLink className="messanger-item__link-icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
});

Feedback.propTypes = {
  dataContacts: PropTypes.object,
  image: PropTypes.object,
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default Feedback;
