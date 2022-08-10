import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useLanaguage from '../../../../hooks/useLanguage';
import PaginationLink from '../../../UI/PaginationLink/PaginationLink';
import Video from '../Video/Video';

const PortfolioInnerProjects = React.forwardRef((props, ref) => {
  const { portfolio, pageContext, refreshFunc } = props;
  const langToggle = useLanaguage;

  return (
    <>
      <div className="portfolio-inner__projects">
        <div className="portfolio-inner__projects-wrapper">
          {/* <div className="portfolio-inner__section-header">
            <span className="portfolio-inner__section-marker" ref={addToRefs}>
              <span className="portfolio-inner__section-marker__count">
                02.
              </span>
              {langToggle("Дизайн інтер'єру", "Дизайн интерьера", "Interior Design")}
            </span>
          </div> */}
          {portfolio.map((item, i) => {
            return (
              <div key={i} className="portfolio-inner__component">
                {/* <div className="portfolio-inner__component-header">
                  {item.title_ua || item.title_ru || item.title_en ? (
                    <h2
                      className="portfolio-inner__component-title"
                      ref={addToRefs}
                    >
                      {langToggle(item.title_ua, item.title_ru, item.title_en)}
                    </h2>
                  ) : null}
                  {item.subtitle_ua || item.subtitle_ru || item.subtitle_en ? (
                    <p
                      className="portfolio-inner__component-subtitle"
                      ref={addToRefs}
                    >
                      {langToggle(
                        item.subtitle_ua,
                        item.subtitle_ru,
                        item.subtitle_en
                      )}
                    </p>
                  ) : null}
                </div> */}

                {item.image ? (
                  <div
                    className="component-image__horizontal-wrapper component-image__wrapper"
                    ref={ref}
                  >
                    <LazyLoadImage
                      key={i}
                      effect="blur"
                      src={`https://admin.ar-design.com.ua${item.image?.url}`}
                      className="component-image__horizontal"
                      alt={langToggle(
                        item.title_ua,
                        item.title_ru,
                        item.title_en
                      )}
                      afterLoad={refreshFunc}
                    />
                  </div>
                ) : null}

                {item.image01 ? (
                  <div
                    className="component-image__vertical-wrapper component-image__wrapper"
                    ref={ref}
                  >
                    <LazyLoadImage
                      key={i}
                      effect="blur"
                      src={`https://admin.ar-design.com.ua${item.image01?.url}`}
                      className="component-image__vertical"
                      alt={langToggle(
                        item.title_ua,
                        item.title_ru,
                        item.title_en
                      )}
                      afterLoad={refreshFunc}
                    />
                  </div>
                ) : null}

                {item.image02 ? (
                  <div
                    className="component-image__vertical-wrapper component-image__wrapper"
                    ref={ref}
                  >
                    <LazyLoadImage
                      key={i}
                      effect="blur"
                      src={`https://admin.ar-design.com.ua${item.image02?.url}`}
                      className="component-image__vertical"
                      alt={langToggle(
                        item.title_ua,
                        item.title_ru,
                        item.title_en
                      )}
                      afterLoad={refreshFunc}
                    />
                  </div>
                ) : null}

                {item.video ? (
                  <Video cover={item.cover_image} url={item.video} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="portfolio-inner__pagination-wrapper" ref={ref}>
        <PaginationLink
          pageContext={pageContext}
          textLeft={langToggle(
            'попередній проект',
            'предыдущий проект',
            'previous project'
          )}
          textRight={langToggle(
            'Наступний проект',
            'следующий проект',
            'The next project'
          )}
        />
      </div>
    </>
  );
});

export default PortfolioInnerProjects;
