import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem/GalleryItem';

const PortfolioGalery = React.forwardRef((props, ref) => {
  const { galleryState } = props;

  return (
    <section className="portfolio-gallery" ref={ref}>
      <div className="section-wrapper">
        <div className="portfolio-items">
          {galleryState.reduce((result, item, index) => {
            if (index % 2) return result;

            const isReverse = Boolean(result.length % 2);

            result.push(
              <div key={index} className="portfolio-item">
                <div className={`img-wrapper ${isReverse && 'reverse'}`}>
                  <GalleryItem item={item} />
                  <GalleryItem item={galleryState[index + 1]} />
                </div>
              </div>
            );

            return result;
          }, [])}
        </div>
      </div>
    </section>
  );
});

PortfolioGalery.propTypes = {
  galleryState: PropTypes.array,
};

export default PortfolioGalery;
