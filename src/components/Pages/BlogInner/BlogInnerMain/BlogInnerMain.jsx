import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import MainScreenHeader from "../../../UI/MainScreenHeader/MainScreenHeader";
import useLanguage from "../../../../hooks/useLanguage";

const BlogInnerMain = ({ dataArticle }) => {
  const image = getImage(dataArticle.image.localFile);
  const langToggle = useLanguage;

  let overlayEl = React.useRef(null);
  let imageEl = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: "-100%",
        duration: 1.2,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      imageEl,
      { y: 140 },
      {
        y: 0,
        duration: 1.5,
        delay: 0.4,
      }
    );
  }, []);

  return (
    <div className="blog-inner__main">
      <div className="blog-inner__wrapper">
        <MainScreenHeader
          title={langToggle(
            dataArticle.title_ua,
            dataArticle.title_ru,
            dataArticle.title_en
          )}
          date={dataArticle.date}
        />
      </div>
      <div className="blog-inner__cover" ref={e => (imageEl = e)}>
        <div
          className="services__main-cover__overlay"
          ref={e => (overlayEl = e)}
        ></div>
        <GatsbyImage
          image={image}
          className="blog-inner__main-image"
          alt={langToggle(
            dataArticle.title_ua,
            dataArticle.title_ru,
            dataArticle.title_en
          )}
        />
      </div>
    </div>
  );
};

export default BlogInnerMain;
