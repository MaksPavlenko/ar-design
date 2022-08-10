import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import useLanguage from "../../../../hooks/useLanguage";

import TabLink from "./TabLink/TabLink";
import ArrowLink from "../../../../svg/arrowlinkblack.svg";
import { fromServicesSlugToUrl } from "../../../../utils/slug";

const ServicesTabs = ({
  active,
  hoverImage,
  mouseEnterHandler,
  mouseLeaveHandler,
  dataServices,
}) => {
  const langToggle = useLanguage;

  const styleTabs = dataServices;
  const typeTabs = dataServices;

  return (
    <div className="tabs-wrapper">
      <TabLink
        active={active === 0}
        mouseLeaveHandler={mouseLeaveHandler}
        mouseEnterHandler={mouseEnterHandler}
      >
        <div className="tab tab-1">
          <ul className="services-catalog_list">
            {styleTabs.map((list, index) => {
              const image = getImage(list.image.localFile);
              if (index === 0 && list.services_category.marker === "style") {
                return (
                  <li
                    key={list.id}
                    role="presentation"
                    className={
                      hoverImage === null
                        ? "services-catalog_list__item is-active"
                        : "services-catalog_list__item"
                    }
                  >
                    <div className="hovered-item__image-wrapper">
                      <GatsbyImage
                        image={image}
                        className="hovered-item__image"
                        alt={langToggle(
                          list.title_ua,
                          list.title_ru,
                          list.title_en
                        )}
                      />
                    </div>
                    <div className="catalog_list__link-wrapper">
                      <Link
                        className="services-catalog_list__link"
                        to={fromServicesSlugToUrl(list.slug)}
                        onMouseEnter={() => {
                          mouseEnterHandler(null);
                        }}
                      >
                        <span>
                          {langToggle(
                            list.title_ua,
                            list.title_ru,
                            list.title_en
                          )}
                        </span>
                        <ArrowLink />
                      </Link>
                    </div>
                  </li>
                );
              } else if (
                index > 0 &&
                list.services_category.marker === "style"
              ) {
                return (
                  <li
                    key={list.id}
                    role="presentation"
                    className={
                      hoverImage === index
                        ? "services-catalog_list__item is-active"
                        : "services-catalog_list__item"
                    }
                  >
                    <div className="hovered-item__image-wrapper">
                      <GatsbyImage
                        image={image}
                        className="hovered-item__image"
                        alt={langToggle(
                          list.title_ua,
                          list.title_ru,
                          list.title_en
                        )}
                      />
                    </div>
                    <div className="catalog_list__link-wrapper">
                      <Link
                        className="services-catalog_list__link"
                        to={fromServicesSlugToUrl(list.slug)}
                        onMouseEnter={() => {
                          mouseEnterHandler(index);
                        }}
                      >
                        <span>
                          {langToggle(
                            list.title_ua,
                            list.title_ru,
                            list.title_en
                          )}
                        </span>
                        <ArrowLink />
                      </Link>
                    </div>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </TabLink>
      <TabLink active={active === 1}>
        <div className="tab tab-2">
          <ul className="services-catalog_list">
            {typeTabs.map((list, index) => {
              const image = getImage(list.image.localFile);
              if (index === 0 && list.services_category.marker === "type") {
                return (
                  <li
                    key={list.id}
                    role="presentation"
                    className={
                      hoverImage === null
                        ? "services-catalog_list__item is-active"
                        : "services-catalog_list__item"
                    }
                  >
                    <div className="hovered-item__image-wrapper">
                      <GatsbyImage
                        image={image}
                        className="hovered-item__image"
                        alt={langToggle(
                          list.title_ua,
                          list.title_ru,
                          list.title_en
                        )}
                      />
                    </div>
                    <div className="catalog_list__link-wrapper">
                      <Link
                        className="services-catalog_list__link"
                        to={fromServicesSlugToUrl(list.slug)}
                        onMouseEnter={() => {
                          mouseEnterHandler(null);
                        }}
                      >
                        <span>
                          {langToggle(
                            list.title_ua,
                            list.title_ru,
                            list.title_en
                          )}
                        </span>
                        <ArrowLink />
                      </Link>
                    </div>
                  </li>
                );
              } else if (
                index > 0 &&
                list.services_category.marker === "type"
              ) {
                return (
                  <li
                    key={list.id}
                    role="presentation"
                    className={
                      hoverImage === index
                        ? "services-catalog_list__item is-active"
                        : "services-catalog_list__item"
                    }
                  >
                    <div className="hovered-item__image-wrapper">
                      <GatsbyImage
                        image={image}
                        className="hovered-item__image"
                        alt={langToggle(
                          list.title_ua,
                          list.title_ru,
                          list.title_en
                        )}
                      />
                    </div>
                    <div className="catalog_list__link-wrapper">
                      <Link
                        className="services-catalog_list__link"
                        to={fromServicesSlugToUrl(list.slug)}
                        onMouseEnter={() => {
                          mouseEnterHandler(index);
                        }}
                      >
                        <span>
                          {langToggle(
                            list.title_ua,
                            list.title_ru,
                            list.title_en
                          )}
                        </span>
                        <ArrowLink />
                      </Link>
                    </div>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </TabLink>
    </div>
  );
};

export default ServicesTabs;
