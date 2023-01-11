import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';

import { DefaultNext, DefaultPrev } from '../DefaultButtons/DefaultButtons';

// const DefaultSlider = ({ children }) => {
//   const slider = React.createRef();
//   var settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 992,
//         settings: { slidesToShow: 2, slidesToScroll: 2 },
//       },
//       {
//         breakpoint: 1199.98,
//         settings: { slidesToShow: 3, slidesToScroll: 3 },
//       },
//     ],
//   };
//   return (
//     <div className="default-slider__wrapper">
//       <Slider ref={slider} {...settings} className={'default-slider'}>
//         {children}
//       </Slider>
//       <div className="default-slider__navigation">
//         <DefaultPrev hendler={() => slider.current.slickPrev()} />
//         <DefaultNext hendler={() => slider.current.slickNext()} />
//       </div>
//     </div>
//   );
// };

const DefaultSlider = React.forwardRef((props, ref) => {
  const { currentSlide, setCurrentSlide } = props;
  const slider = React.createRef();

  function handleAfterChange(index) {
    setCurrentSlide(index);
  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    afterChange: (index) => {
      handleAfterChange(index);
    },
    initialSlide: currentSlide,
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
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="default-slider__wrapper" ref={ref}>
      <Slider ref={slider} {...settings} className={'default-slider'}>
        {props.children}
      </Slider>
      <div className="default-slider__navigation">
        <DefaultPrev hendler={() => slider.current.slickPrev()} />
        <DefaultNext hendler={() => slider.current.slickNext()} />
      </div>
    </div>
  );
});

export default DefaultSlider;
