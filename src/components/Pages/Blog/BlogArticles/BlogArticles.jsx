import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-react-i18next';
import useLanguage from '../../../../hooks/useLanguage';
import { fromBlogSlugToUrl } from '../../../../utils/slug';

const BlogArticles = React.forwardRef((props, ref) => {
  const { articles } = props;

  const langToggle = useLanguage;

  return (
    <section className="blog-articles__wrapper default-section">
      <div className="blog__wrapper">
        <div className="blog__article">
          {articles.map((item, index) => {
            const image = getImage(item.image.localFile);
            if (index === 0) {
              return null;
            } else {
              return (
                <div className="animation-wrapper" ref={ref} key={index}>
                  <Link
                    to={fromBlogSlugToUrl(item.slug)}
                    key={item.id}
                    className="blog__article-item"
                  >
                    <div className="blog__article-wrapper">
                      <div className="blog__article-cover">
                        <GatsbyImage
                          image={image}
                          className="blog__article-image"
                          alt={langToggle(
                            item.title_ua,
                            item.title_ru,
                            item.title_en
                          )}
                        />

                        <span className="blog__article-btn">
                          <span className="blog__article-pulse"></span>
                          <span className="top-button__icon">
                            <span className="top-button__icon-text">
                              {langToggle(
                                'Відкрити статтю',
                                'Открыть статью',
                                'Open article'
                              )}
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="blog__article-content">
                        <span className="blog__article-date">{item.date}</span>
                        <p className="blog__article-title">
                          {langToggle(
                            item.title_ua,
                            item.title_ru,
                            item.title_en
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
});

BlogArticles.propTypes = {
  articles: PropTypes.array,
};

export default BlogArticles;
