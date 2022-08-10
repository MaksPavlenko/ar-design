import React from 'react';
import { graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLanguage from '../hooks/useLanguage';
import '../styles/style.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';
import HomeMain from '../components/Pages/Home/HomeMain/HomeMain';
import HomeStory from '../components/Pages/Home/HomeStory/HomeStory';
import Video from '../components/UI/Video/Video';
import Feedback from '../components/UI/Feedback/Feedback';
import Quote from '../components/UI/Quote/Quote';
import Facts from '../components/UI/Facts/Facts';
import HomeServices from '../components/Pages/Home/HomeServices/HomeServices';

import homeData from '../db/homeData';

const IndexPage = ({ data }) => {
  // const staticServices = servicesStatic;
  const dataHomePage = data.strapiHomes;
  const dataHomecontacts = data.strapiContacts;

  const langToggle = useLanguage;
  const breakpoints = useBreakpoint();

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

  return (
    <>
      <Layout>
        <Seo
          title={langToggle(
            dataHomePage.Seo_title_ua,
            dataHomePage.Seo_title_ru,
            dataHomePage.Seo_title_en
          )}
          description={langToggle(
            dataHomePage.Seo_description_ua,
            dataHomePage.Seo_description_ru,
            dataHomePage.Seo_description_en
          )}
        />
        <HomeMain
          dataMain={dataHomePage.main_title}
          dataSlider={data.allStrapiPortfolio.nodes}
          mainSlide={dataHomePage.portfolios}
        />
        <HomeStory
          storyImage={dataHomePage.story_image}
          dataStory={dataHomePage.story}
          ref={{
            fadeY: fadeYRefs,
            fadeOver: fadeOverlayRefs,
          }}
        />
        {breakpoints.sm ? null : (
          <Video cover={dataHomePage.cover_image} url={dataHomePage.video} />
        )}
        <HomeServices
          services={homeData.services}
          markerCount={'02'}
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
        <Facts
          facts={homeData.facts}
          markerCount={'04'}
          markerTitle={langToggle(
            homeData.facts.marker_ua,
            homeData.facts.marker_ru,
            homeData.facts.marker_en
          )}
          sectionTitle={langToggle(
            homeData.facts.title_ua,
            homeData.facts.title_ru,
            homeData.facts.title_en
          )}
          ref={fadeYRefs}
        />
        {breakpoints.sm ? null : (
          <Quote quotes={dataHomePage.quotes} ref={fadeYRefs} />
        )}

        <Feedback
          markerCount={'05'}
          markerTitle={langToggle(
            'залишити заявку',
            'Оставить заявку',
            'Submit your application'
          )}
          sectionTitle={langToggle(
            dataHomecontacts.feedBack.title_ua,
            dataHomecontacts.feedBack.title_ru,
            dataHomecontacts.feedBack.title_en
          )}
          dataContacts={dataHomecontacts}
          imageContact={dataHomecontacts.feedBack.image}
          ref={{
            fadeY: fadeYRefs,
            fadeOver: fadeOverlayRefs,
          }}
        />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MainHome($language: String!) {
    strapiHomes {
      Seo_title_ua
      Seo_title_ru
      Seo_title_en
      Seo_description_ua
      Seo_description_ru
      Seo_description_en
      main_title {
        title_ua
        title_ru
        title_en
      }
      story {
        title_ua
        title_ru
        title_en
        text_ua
        text_ru
        text_en
      }
      story_image {
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
      services {
        title_ua
        title_ru
        title_en
      }
      packages {
        title_ua
        title_ru
        title_en
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
    allStrapiServices {
      nodes {
        id
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
        services_category {
          marker
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
        award
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
