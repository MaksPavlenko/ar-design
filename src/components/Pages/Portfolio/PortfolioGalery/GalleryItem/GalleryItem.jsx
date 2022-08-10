import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fromPortfolioSlugToUrl } from "../../../../../utils/slug";
import PropTypes from "prop-types";
import useLanguage from "../../../../../hooks/useLanguage";

import Award from "../../../../../svg/aword.svg";

const GalleryItem = ({ item }) => {
  const langToggle = useLanguage;

  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    itemEl.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  const AwardBlock = () => {
    return (
      <div className="portfolio-item__aword">
        <Award className="aword" />
      </div>
    );
  };

  if (!item) {
    return null;
  }
  const image = getImage(item.main_image.localFile);

  return (
    <div className="animate-wrapper" ref={addToRefs}>
      <Link to={fromPortfolioSlugToUrl(item.slug)} className="portfolio__item">
        <div className="portfolio-item__image-wrapper">
          {item.award === true ? <AwardBlock /> : null}

          <GatsbyImage
            image={image}
            className="portfolio-item__image"
            alt={langToggle(
              item.project_name_ua,
              item.project_name_ru,
              item.project_name_en
            )}
          />
        </div>
        <div className="portfolio-item__content">
          <div className="portfolio-item__content-wrapper">
            <h3 className="portfolio-item__title">
              {langToggle(
                item.project_name_ua,
                item.project_name_ru,
                item.project_name_en
              )}
            </h3>
            <p className="portfolio-item__description">
              {langToggle(
                item.sub_title_ua,
                item.sub_title_ru,
                item.sub_title_en
              )}
            </p>
          </div>
          <span className="portfolio-item__number">
            {item.project_number <= 10
              ? "AR - 00" + item.project_number
              : "AR - 0" + item.project_number}
          </span>
        </div>
      </Link>
    </div>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.object,
};

export default GalleryItem;
