import React from 'react';
// import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-react-i18next';
import { fromPortfolioSlugToUrl } from '../../../../../../utils/slug';
import ArrowLink from '../../../../../../svg/arrowlinkblack.svg';
import useLanguage from '../../../../../../hooks/useLanguage';
// import Award from '../../../../../../svg/aword.svg';

const MainSliderSlide = ({ slideClasses, slide, index }) => {
  const langToggle = useLanguage;
  const image = getImage(slide.main_image.localFile);

  // const AwardBlock = () => {
  //   return (
  //     <div className="portfolio-item__aword">
  //       <Award className="aword" />
  //     </div>
  //   );
  // };

  return (
    <div
      className={`slider-slide ${slideClasses[index]}`}
      // key={index}
    >
      <div className="slide-left">
        <Link to={fromPortfolioSlugToUrl(slide.slug)} className="slide-link">
          {/* {slide.award === true ? <AwardBlock /> : null} */}

          <GatsbyImage
            image={image}
            className="slider-image"
            alt={slide.project_name_ru}
          />
        </Link>
      </div>
      <div className="slide-right">
        <div className="slide-header">
          <span className="slide-case">
            {slide.project_number <= 10
              ? 'AR - 00' + slide.project_number
              : 'AR - 0' + slide.project_number}
          </span>
          <ul className="slide-info">
            {slide.project_description.map((item, i) => {
              if (item.marker) {
                return (
                  <li key={i} className="slide-info--item">
                    <span className="info-item--title">
                      {langToggle(
                        item.marker_ua,
                        item.marker_ru,
                        item.marker_en
                      )}
                    </span>
                    <span className="info-item--value">
                      {langToggle(item.value_ua, item.value_ru, item.value_en)}
                    </span>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div className="slide-footer">
          <h2 className="h2">
            {langToggle(
              slide.project_name_ua,
              slide.project_name_ru,
              slide.project_name_en
            )}
          </h2>
          <p className="slide-descr">
            {langToggle(
              slide.sub_title_ua,
              slide.sub_title_ru,
              slide.sub_title_en
            )}
          </p>
          <Link to={fromPortfolioSlugToUrl(slide.slug)} className="slide-link">
            <span className="slide-link--wrapper">
              <span className="link-title">
                {langToggle(
                  'Дивитись проект',
                  'Смотреть проект',
                  'Watch the project'
                )}
              </span>
              <i className="link-icon">
                <ArrowLink />
              </i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// MainSliderSlide.propTypes = {};

export default MainSliderSlide;
