import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';

import SectionHeader from '../../../UI/SectionHeader/SectionHeader';

const ServicesApproach = React.forwardRef((props, ref) => {
  const { markerCount, markerTitle, sectionTitle, items } = props;
  const langToggle = useLanguage;

  return (
    <section className="services__approach default-section">
      <div className="section-wrapper">
        <SectionHeader
          markerCount={markerCount}
          markerTitle={markerTitle}
          sectionTitle={sectionTitle}
          ref={ref}
        />
        <div className="services__aproach-items">
          {items.map((item, index) => {
            const count = ++index;
            return (
              <div className="services__aproach-item" key={index} ref={ref}>
                <span className="services__aproach-item__count">
                  {'0' + count + '.'}
                </span>
                <div className="services__aproach-item__content">
                  <div className="services__approach-item__content-icon">
                    <img
                      src={`https://admin.ar-design.com.ua${item.icon?.url}`}
                      alt="icon"
                      className="content-icon__image"
                    />
                  </div>
                  <div className="services__approach-item__content-info">
                    <h3 className="content-info__title">
                      {langToggle(item.title_ua, item.title_ru, item.title_en)}
                    </h3>
                    <p className="content-info__description">
                      {langToggle(
                        item.description_ua,
                        item.description_ru,
                        item.description_en
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ServicesApproach.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  items: PropTypes.array,
};

export default ServicesApproach;
