import React from 'react';
import { ThemeContext } from '../../../../../context/ThemeProvider';
import useLanguage from '../../../../../hooks/useLanguage';
import { gsap } from 'gsap';

// import PropTypes from 'prop-types';
import DefaultSlider from '../../../../UI/DefaultSlider/DefaultSlider';
import { DefaulSlideLink } from '../../../../UI/DefaulSlide/ DefaulSlide';
import { fromPortfolioSlugToUrl } from '../../../../../utils/slug';

const HomeMainMobile = ({ dataSlider }) => {
  const { portfolioSlide, setPortfolioSlide } = React.useContext(ThemeContext);
  const langToggle = useLanguage;

  let sliderEl = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      sliderEl,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <DefaultSlider
      ref={(e) => (sliderEl = e)}
      currentSlide={portfolioSlide}
      setCurrentSlide={setPortfolioSlide}
    >
      {dataSlider.map((item, index) => {
        return (
          <DefaulSlideLink
            key={index}
            title={langToggle(
              item.project_name_ua,
              item.project_name_ru,
              item.project_name_en
            )}
            description={langToggle(
              item.sub_title_ua,
              item.sub_title_ru,
              item.sub_title_en
            )}
            number={item.project_number}
            img={item.main_image.localFile}
            link={fromPortfolioSlugToUrl(item.slug)}
          />
        );
      })}
    </DefaultSlider>
  );
};

// HomeMainMobile.propTypes = {
//   dataSlider: PropTypes.array,
// };

export default HomeMainMobile;
