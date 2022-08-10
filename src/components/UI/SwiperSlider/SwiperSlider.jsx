import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
// import PropTypes from 'prop-types';

import { DefaultNext, DefaultPrev } from '../DefaultButtons/DefaultButtons';

const SwiperSlider = React.forwardRef((props, ref) => {
  const { swpFunc } = props;
  const slider = React.createRef();

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // onSwipe: swpFunc,
    swipe: true,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-wrapper" ref={ref}>
      <Slider ref={slider} {...settings} className={'slider'}>
        {props.children}
      </Slider>
      <div className="slider-navigation">
        <DefaultPrev hendler={() => slider.current.slickPrev()} />
        <DefaultNext hendler={() => slider.current.slickNext()} />
      </div>
    </div>
  );
});

// SwiperSlider.propTypes = {};

export default SwiperSlider;
