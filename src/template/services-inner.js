import React from 'react';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLanguage from '../hooks/useLanguage';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';
import '../styles/style.sass';

import {
  ServicesInnerMain,
  ServicesInnerAboutStyle,
  Video,
  // ServicePackages,
  ServicesInnerProjects,
  Feedback,
  CrumbsNav,
} from '../components/Pages/ServicesInner';
import servicesInnerStatic from '../db/servicesInnerStatic';
import homeData from '../db/homeData';
import HomeServices from '../components/Pages/Home/HomeServices/HomeServices';
import PortfolioMobile from '../components/Pages/Home/PortfolioMobile/PortfolioMobile';

const ServicesInnerPage = ({ data }) => {
  const dataServices = data.strapiServices;
  const breakpoints = useBreakpoint();
  const langToggle = useLanguage;

  let fadeY = React.useRef([]);
  fadeY.current = [];

  let fadeOverlay = React.useRef([]);
  fadeOverlay.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    fadeY.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 140,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.25,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    fadeOverlay.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: '-100%',
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const fadeYRefs = (el) => {
    if (el && !fadeY.current.includes(el)) {
      fadeY.current.push(el);
    }
  };

  const fadeOverlayRefs = (el) => {
    if (el && !fadeOverlay.current.includes(el)) {
      fadeOverlay.current.push(el);
    }
  };

  function refreshFunc() {
    ScrollTrigger.refresh(true);
  }

  return (
    <>
      <Layout>
        <Seo
          title={useLanguage(
            dataServices.seo_title_ua,
            dataServices.seo_title_ru,
            dataServices.seo_title_en
          )}
          description={useLanguage(
            dataServices.seo_description_ua,
            dataServices.seo_description_ru,
            dataServices.seo_description_en
          )}
        />
        <ServicesInnerMain
          subTitle={useLanguage('Послуга', 'Услуга', 'Service')}
          title={useLanguage(
            dataServices.title_ua,
            dataServices.title_ru,
            dataServices.title_en
          )}
          carousel={dataServices.Gallery}
        />
        <ServicesInnerAboutStyle
          markerCount={'02'}
          markerTitle={useLanguage('Про стиль', 'О стиле', 'About style')}
          sectionTitle={useLanguage(
            dataServices.about_style.title_ua,
            dataServices.about_style.title_ru,
            dataServices.about_style.title_en
          )}
          items={dataServices.about_style.accordion}
          refreshFunc={refreshFunc}
          ref={fadeYRefs}
        />
        {dataServices.video ? (
          <Video cover={dataServices.cover_image} url={dataServices.video} />
        ) : null}
        <HomeServices
          services={homeData.services}
          markerCount={'03'}
          markerTitle={langToggle(
            homeData.services.marker_ua,
            homeData.services.marker_ru,
            homeData.services.marker_en
          )}
          sectionTitle={langToggle(
            homeData.services.title_ua,
            homeData.services.title_ru,
            homeData.services.title_en
          )}
          ref={fadeYRefs}
        />
        {/* <ServicePackages
          markerCount={'03'}
          markerTitle={useLanguage(
            'пакети послуг',
            'Пакеты услуг',
            'Service packages'
          )}
          sectionTitle={useLanguage(
            dataServices.packages.title_ua,
            dataServices.packages.title_ru,
            dataServices.packages.title_en
          )}
          dataServices={data.strapiServicesPages.packages}
        /> */}
        {dataServices.portfolios.length === 0 ? null : (
          // <ServicesInnerProjects
          //   markerCount={'04'}
          //   markerTitle={langToggle(
          //     'Каталог проектів',
          //     'Каталог проектов',
          //     'Project catalog'
          //   )}
          //   sectionTitle={langToggle(
          //     dataServices.projects.title_ua,
          //     dataServices.projects.title_ru,
          //     dataServices.projects.title_en
          //   )}
          //   dataCatalog={dataServices.portfolios}
          // />
          <>
            {breakpoints.sm ? (
              <PortfolioMobile
                sectionTitle={langToggle(
                  dataServices.projects.title_ua,
                  dataServices.projects.title_ru,
                  dataServices.projects.title_en
                )}
                dataPortfolio={dataServices.portfolios}
              />
            ) : (
              <ServicesInnerProjects
                markerCount={'04'}
                markerTitle={langToggle(
                  'Каталог проектів',
                  'Каталог проектов',
                  'Project catalog'
                )}
                sectionTitle={langToggle(
                  dataServices.projects.title_ua,
                  dataServices.projects.title_ru,
                  dataServices.projects.title_en
                )}
                dataCatalog={dataServices.portfolios}
              />
            )}
          </>
        )}

        <Feedback
          markerCount={'05'}
          markerTitle={useLanguage(
            'залишити заявку',
            'Оставить заявку',
            'Submit your application'
          )}
          sectionTitle={useLanguage(
            data.strapiContacts.feedBack.title_ua,
            data.strapiContacts.feedBack.title_ru,
            data.strapiContacts.feedBack.title_en
          )}
          dataContacts={data.strapiContacts}
          imageContact={data.strapiContacts.feedBack.image}
          ref={{
            fadeY: fadeYRefs,
            fadeOver: fadeOverlayRefs,
          }}
        />
        <CrumbsNav
          crumbsNav={servicesInnerStatic.crumbsNav}
          slug={'/services/' + dataServices.slug + '/'}
          title={useLanguage(
            dataServices.title_ua,
            dataServices.title_ru,
            dataServices.title_en
          )}
          ref={fadeYRefs}
        />
      </Layout>
    </>
  );
};

export default ServicesInnerPage;

export const query = graphql`
  query ServicesInner($language: String!, $id: String!) {
    strapiServices(id: { eq: $id }) {
      seo_title_ua
      seo_title_ru
      seo_title_en
      seo_description_ua
      seo_description_ru
      seo_description_en
      title_ua
      title_ru
      title_en
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      Gallery {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      video
      cover_image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      about_style {
        title_ua
        title_ru
        title_en
        accordion {
          id
          title_ua
          title_ru
          title_en
          content_ua
          content_ru
          content_en
        }
      }
      packages {
        title_ua
        title_ru
        title_en
      }
      projects {
        title_ua
        title_ru
        title_en
      }
      portfolios {
        id
        project_name_ua
        project_name_ru
        project_name_en
        project_number
        slug
        sub_title_ua
        sub_title_ru
        sub_title_en
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    strapiServicesPages {
      packages {
        title_ua
        title_ru
        title_en
        list {
          title_ua
          title_ru
          title_en
        }
      }
    }
    strapiContacts {
      messengers {
        messenger
        link
      }
      email
      feedBack {
        title_ua
        title_ru
        title_en
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
