import React from "react";
import PropTypes from "prop-types";
import MainScreenHeader from "../../../UI/MainScreenHeader/MainScreenHeader";
import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";

const PortfolioMain = ({
  subTitle,
  title,
  toggleButton,
  active,
  gallery,
  setGalleryState,
}) => {
  return (
    <section className="portfolio-main">
      <div className="portfolio-main__wrapper">
        <MainScreenHeader subTitle={subTitle} title={title} />
        <PortfolioFilter
          toggleButton={toggleButton}
          active={active}
          gallery={gallery}
          setGalleryState={setGalleryState}
        />
      </div>
    </section>
  );
};

PortfolioMain.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  toggleButton: PropTypes.func,
};

export default PortfolioMain;
