import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLanguage from "../../../../hooks/useLanguage";
import Video from "./Video/Video";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ReactMarkdown = require("react-markdown");

const BlogInnerArticle = ({ dataContent }) => {
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
  const langToggle = useLanguage;
  return (
    <div className="blog-inner__article">
      <div className="blog-inner__article-wrapper">
        {dataContent.map((article, index) => {
          if (article.title_ua || article.title_ru || article.title_en) {
            return (
              <h2 key={index} className="h2" ref={addToRefs}>
                {langToggle(
                  article.title_ua,
                  article.title_ru,
                  article.title_en
                )}
              </h2>
            );
          } else if (
            article.subtitle_ua ||
            article.subtitle_ru ||
            article.subtitle_en
          ) {
            return (
              <h3 key={index} className="h3" ref={addToRefs}>
                {langToggle(
                  article.subtitle_ua,
                  article.subtitle_ru,
                  article.subtitle_en
                )}
              </h3>
            );
          } else if (
            article.description_ua ||
            article.description_ru ||
            article.description_en
          ) {
            return (
              <div key={index} className="animate" ref={addToRefs}>
                <ReactMarkdown
                  className="markdown-components"
                  children={langToggle(
                    article.description_ua,
                    article.description_ru,
                    article.description_en
                  )}
                />
              </div>
            );
          } else if (article.video) {
            return (
              <Video key={index} cover={article.image} url={article.video} />
            );
          } else if (article.image) {
            return (
              <div key={index} ref={addToRefs}>
                <LazyLoadImage
                  effect="blur"
                  src={`https://admin.ar-design.com.ua${article.image?.url}`}
                  className="blog-inner__image"
                  alt={langToggle(
                    article.title_ua,
                    article.title_ru,
                    article.title_en
                  )}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default BlogInnerArticle;
