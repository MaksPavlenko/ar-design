import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import PropTypes from 'prop-types';

export const DefaulSlideLink = ({ img, title, link, description, number }) => {
  const image = getImage(img);
  return (
    <div className="default-slide__wrapper">
      <Link to={link} className="default-slide__link">
        <div className="default-slide__image--wrapper">
          <GatsbyImage
            className="adefault-slide__image"
            image={image}
            alt={title}
            loading="eager"
          />
        </div>
        <div className="default-slide__info">
          <div className="default-slide__info--wrapper">
            <h3 className="default-slide__title">{title}</h3>
            <p className="default-slide__descr">{description}</p>
          </div>
          <div className="default-slide__marker--wrapper">
            <span className="default-slide__marker">
              {number <= 10 ? 'AR - 00' + number : 'AR - 0' + number}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// DefaulSlide.propTypes = {};

// export default DefaulSlide;
