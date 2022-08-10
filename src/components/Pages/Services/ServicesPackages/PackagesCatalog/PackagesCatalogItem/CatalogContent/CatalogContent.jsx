import React from 'react';
import useLanguage from '../../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import { DefaultPlus } from '../../../../../../UI/DefaultButtons/DefaultButtons';

const CatalogContent = React.forwardRef((props, ref) => {
  const { item, index, show, setShow, refreshFunc } = props;
  const langToggle = useLanguage;
  return (
    <article className="catalog-item__content">
      <button
        className={
          show === index
            ? 'catalog-item__header is-show'
            : 'catalog-item__header'
        }
        onClick={() => {
          setShow(show === index ? null : index);
          refreshFunc();
        }}
        ref={ref}
      >
        <span className="catalog-item__header--info">
          <span className="catalog-item__header--marker">
            {langToggle(item.marker_ua, item.marker_ru, item.marker_en)}
          </span>
          <h3 className="catalog-item__header--title">
            {langToggle(item.title_ua, item.title_ru, item.title_en)}
          </h3>
        </span>
        <div className="catalog-item__header--icon">
          <DefaultPlus />
        </div>
      </button>
      <ul
        className={
          show === index ? 'catalog-item__list is-show' : 'catalog-item__list'
        }
        ref={ref}
      >
        {item.items.map((listItem, index) => {
          if (listItem.sub_items) {
            return (
              <li
                className="catalog-list__item catalog-list__item--sub"
                key={index}
              >
                <ol className="catalog-sublist">
                  {listItem.sub_items.map((subItem, index) => {
                    return (
                      <li className="catalog-sublist__item" key={index}>
                        <p className="catalog-sublist__item--title">
                          {langToggle(
                            subItem.title_ua,
                            subItem.title_ru,
                            subItem.title_en
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          } else {
            return (
              <li className="catalog-list__item" key={index}>
                <p className="catalog-list__item--title">
                  {langToggle(
                    listItem.title_ua,
                    listItem.title_ru,
                    listItem.title_en
                  )}
                </p>
              </li>
            );
          }
        })}
      </ul>
    </article>
  );
});

CatalogContent.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  setShow: PropTypes.func,
  refreshFunc: PropTypes.func,
};

export default CatalogContent;
