import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import useLanguage from "../../../../hooks/useLanguage";

import MainScreenHeader from "../../../UI/MainScreenHeader/MainScreenHeader";

import ButtonLink from "../../../UI/ButtonLink/ButtonLink";
import { fromBlogSlugToUrl } from "../../../../utils/slug";

const BlogTopArticle = ({ topArticle, subTitle, title }) => {
  const langToggle = useLanguage;
  let overlayEl = React.useRef(null);
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      overlayEl,
      { y: 0 },
      {
        y: "-100%",
        duration: 1.2,
        delay: 0.4,
      }
    );

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

  return (
    <section className="blog__main-screen">
      <div className="blog__top-wrapper blog__top-wrapper--title">
        <MainScreenHeader title={title} subTitle={subTitle} />
      </div>
      {topArticle.map((article, index) => {
        const image = getImage(article.image.localFile);
        if (index === 0) {
          return (
            <div key={index} className="blog__top-article">
              <div className="blog__top-image">
                <div
                  className="services__main-cover__overlay"
                  ref={e => (overlayEl = e)}
                ></div>

                <GatsbyImage
                  image={image}
                  className="blog-image"
                  alt={article.title_ru}
                />

                <div className="blog__top-wrapper">
                  <div className="blog__top-content">
                    <span className="blog__top-date" ref={addToRefs}>
                      {article.date}
                    </span>
                    <h2 className="blog__top-title" ref={addToRefs}>
                      {langToggle(
                        article.title_ua,
                        article.title_ru,
                        article.title_en
                      )}
                    </h2>
                    <p className="blog__top-desc" ref={addToRefs}>
                      {langToggle(
                        article.intro_ua,
                        article.intro_ru,
                        article.intro_en
                      )}
                    </p>
                    <span ref={addToRefs}>
                      <ButtonLink
                        to={fromBlogSlugToUrl(article.slug)}
                        title={langToggle(
                          "Читати статтю",
                          "Читать статью",
                          "Read the Article"
                        )}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};

BlogTopArticle.propTypes = {
  topArticle: PropTypes.array,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default BlogTopArticle;
