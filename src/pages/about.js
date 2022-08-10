import React from 'react';
import useLanguage from '../hooks/useLanguage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';
import '../styles/style.sass';

import AboutMain from '../components/Pages/About/AboutMain/AboutMain';
import AboutFounder from '../components/Pages/About/AboutFounder/AboutFounder';
import AboutHistory from '../components/Pages/About/AboutHistory/AboutHistory';
import AboutPhilosophy from '../components/Pages/About/AboutPhilosophy/AboutPhilosophy';
import Video from '../components/UI/Video/Video';
import Quote from '../components/UI/Quote/Quote';
import CasesSlider from '../components/UI/CasesSlider/CasesSlider';
import PortfolioMobile from '../components/Pages/Home/PortfolioMobile/PortfolioMobile';
import CrumbsNav from '../components/UI/CrumbsNav/CrumbsNav';

import { aboutStatic } from '../db/aboutStatic';

const AboutPage = ({ data }) => {
  const dataAbout = data.strapiAbouts;
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

  const portfolio = data.allStrapiPortfolio.nodes;
  const portfolioPriority = data.strapiHomes.portfolios;

  const allSlides = portfolioPriority.concat(portfolio);
  const filtSlides = [];
  allSlides.filter((item) => {
    if (!filtSlides.some((el) => el.slug === item.slug)) {
      return filtSlides.push(item);
    } else {
      return allSlides;
    }
  });

  return (
    <>
      <Layout>
        <Seo
          title={langToggle(
            dataAbout.Seo_title_ua,
            dataAbout.Seo_title_ru,
            dataAbout.Seo_title_en
          )}
          description={langToggle(
            dataAbout.Seo_description_ua,
            dataAbout.Seo_description_ru,
            dataAbout.Seo_description_en
          )}
        />
        <AboutMain
          subTitle={langToggle('Про нас', 'О нас', 'About us')}
          title={langToggle(
            dataAbout.title_ua,
            dataAbout.title_ru,
            dataAbout.title_en
          )}
          intro={dataAbout.intro}
          mainImage={dataAbout.image}
        />
        <AboutFounder
          founderImage={dataAbout.founder.image}
          founder={dataAbout.founder}
          ref={{
            fadeY: fadeYRefs,
            fadeOver: fadeOverlayRefs,
          }}
        />
        <AboutHistory
          markerCount={'03.'}
          markerTitle={langToggle('Історія', 'История', 'Story')}
          description={langToggle(
            dataAbout.history_ua,
            dataAbout.history_ru,
            dataAbout.history_en
          )}
          ref={fadeYRefs}
        />
        <Video cover={dataAbout.cover_image} url={dataAbout.video} />
        <Quote quotes={dataAbout.quotes} ref={fadeYRefs} />
        {/* <CasesSlider
          dataPortfolio={data.allStrapiPortfolio.nodes}
          markerCount={'03'}
          markerTitle={useLanguage('портфоліо', 'Портфолио', 'Portfolio')}
          sectionTitle={useLanguage(
            dataAbout.portfolio.title_ua,
            dataAbout.portfolio.title_ru,
            dataAbout.portfolio.title_en
          )}
        /> */}
        {breakpoints.sm ? (
          <PortfolioMobile
            sectionTitle={langToggle(
              dataAbout.portfolio.title_ua,
              dataAbout.portfolio.title_ru,
              dataAbout.portfolio.title_en
            )}
            dataPortfolio={allSlides}
          />
        ) : (
          <CasesSlider
            dataPortfolio={allSlides}
            markerCount={'04'}
            markerTitle={langToggle('портфоліо', 'Портфолио', 'Portfolio')}
            sectionTitle={langToggle(
              dataAbout.portfolio.title_ua,
              dataAbout.portfolio.title_ru,
              dataAbout.portfolio.title_en
            )}
          />
        )}

        <AboutPhilosophy
          markerCount={'05'}
          markerTitle={langToggle('філософія', 'Философия', 'Philosophy')}
          sectionTitle={langToggle(
            dataAbout.philosophy.title_ua,
            dataAbout.philosophy.title_ru,
            dataAbout.philosophy.title_en
          )}
          description={langToggle(
            dataAbout.philosophy.description_ua,
            dataAbout.philosophy.description_ru,
            dataAbout.philosophy.description_en
          )}
          ref={fadeYRefs}
        />
        <CrumbsNav crumbsNav={aboutStatic.crumbsNav} ref={fadeYRefs} />
      </Layout>
    </>
  );
};

export default AboutPage;

export const aboutQuery = graphql`
  query AboutPage($language: String!) {
    strapiAbouts {
      Seo_title_ua
      Seo_title_ru
      Seo_title_en
      Seo_description_ua
      Seo_description_ru
      Seo_description_en
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
      intro {
        title_ua
        title_ru
        title_en
      }
      founder {
        title_ua
        title_ru
        title_en
        description_ua
        description_ru
        description_en
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      history_ua
      history_ru
      history_en
      video
      cover_image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      quotes {
        quote_ua
        quote_ru
        quote_en
        caption_ua
        caption_ru
        caption_en
      }
      portfolio {
        title_ua
        title_ru
        title_en
      }
      philosophy {
        title_ua
        title_ru
        title_en
        description_ua
        description_ru
        description_en
      }
    }
    allStrapiPortfolio(sort: { fields: id, order: DESC }) {
      nodes {
        project_name_ua
        project_name_ru
        project_name_en
        sub_title_ua
        sub_title_ru
        sub_title_en
        project_number
        slug
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
        project_description {
          marker
          marker_en
          marker_ru
          marker_ua
          value_en
          value_ru
          value_ua
        }
      }
    }
    strapiHomes {
      portfolios {
        project_name_ua
        project_name_ru
        project_name_en
        project_number
        sub_title_ua
        sub_title_ru
        sub_title_en
        slug
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
        project_description {
          marker
          marker_en
          marker_ru
          marker_ua
          value_en
          value_ru
          value_ua
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
