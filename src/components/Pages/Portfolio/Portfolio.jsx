import React from 'react';
import PropTypes from 'prop-types';

import PortfolioMain from './PortfolioMain/PortfolioMain';
import PortfolioGalery from './PortfolioGalery/PortfolioGalery';

const Portfolio = React.forwardRef((props, ref) => {
  const { subTitle, title, gallery, refreshFunc } = props;

  const [active, setActive] = React.useState(null);
  const [galleryState, setGalleryState] = React.useState(gallery);

  function toggleButton(index) {
    setActive(index);
    refreshFunc();
  }

  return (
    <div className="portfolio">
      <PortfolioMain
        toggleButton={toggleButton}
        active={active}
        gallery={gallery}
        setGalleryState={setGalleryState}
        subTitle={subTitle}
        title={title}
      />
      <PortfolioGalery galleryState={galleryState} ref={ref} />
    </div>
  );
});

Portfolio.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  gallery: PropTypes.array,
  refreshFunc: PropTypes.func,
};

export default Portfolio;
