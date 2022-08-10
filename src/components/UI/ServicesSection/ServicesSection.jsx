import React from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesTabTitle from './ServicesTabTitle/ServicesTabTitle';
import ServicesTabs from './ServicesTabs/ServicesTabs';
import SectionHeader from '../SectionHeader/SectionHeader';

const ServicesSection = React.forwardRef((props, ref) => {
  const {
    markerCount,
    markerTitle,
    sectionTitle,
    staticServices,
    dataServices,
  } = props;

  const [hoverImage, setHoverImage] = React.useState(null);
  const [active, setActive] = React.useState(0);

  const mouseEnterHandler = (index) => {
    setHoverImage(index);
  };

  const mouseLeaveHandler = () => {
    setHoverImage(null);
  };

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  // let blockEl = React.useRef(null);

  // React.useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     blockEl,
  //     {
  //       opacity: 0,
  //       y: 180,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: blockEl,
  //         start: 'top bottom',
  //         toggleActions: 'play none none reverse',
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section className="services-section default-section">
      <div className="section-header__wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={ref}
        />
      </div>
      <div className="animate-container">
        <div className="services-section__wrapper" ref={ref}>
          <ServicesTabTitle
            handleClick={handleClick}
            active={active}
            dataTabs={staticServices.tabsButtons}
          />

          <ServicesTabs
            active={active}
            hoverImage={hoverImage}
            mouseEnterHandler={mouseEnterHandler}
            mouseLeaveHandler={mouseLeaveHandler}
            dataServices={dataServices}
          />
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
