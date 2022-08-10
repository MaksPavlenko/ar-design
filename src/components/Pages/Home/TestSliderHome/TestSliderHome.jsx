import React from 'react';
import PropTypes from 'prop-types';
import SwiperSlider from '../../../UI/SwiperSlider/SwiperSlider';
import { Link } from 'gatsby-plugin-react-i18next';

const TestSliderHome = React.forwardRef((props, ref) => {
  const { dataPortfolio } = props;
  function swpFunc() {
    console.log('Swipe');
  }
  return (
    <div className="test-slider__section default-section">
      <div className="section-wrapper">
        <SwiperSlider swpFunc={swpFunc}>
          <div className="slide-container">
            <Link to="/about/" className="slide">
              <h1>Slide</h1>
            </Link>
          </div>
          <div className="slide-container">
            <Link to="/about/" className="slide">
              <h1>Slide</h1>
            </Link>
          </div>
          <div className="slide-container">
            <Link to="/about/" className="slide">
              <h1>Slide</h1>
            </Link>
          </div>
          <div className="slide-container">
            <Link to="/about/" className="slide">
              <h1>Slide</h1>
            </Link>
          </div>
          <div className="slide-container">
            <Link to="/about/" className="slide">
              <h1>Slide</h1>
            </Link>
          </div>
        </SwiperSlider>
      </div>
    </div>
  );
});

TestSliderHome.propTypes = {
  dataPortfolio: PropTypes.array,
};

export default TestSliderHome;
