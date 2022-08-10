import React from 'react';
import useLanguage from '../hooks/useLanguage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';
import '../styles/style.sass';

import { PortfolioInnerStatic } from '../db/portfolioInnerStatic';
import PortfolioMain from '../components/Pages/PortfolioInner/PortfolioMain/PortfolioMain';
import CrumbsNav from '../components/UI/CrumbsNav/CrumbsNav';
import PortfolioInnerProjects from '../components/Pages/PortfolioInner/PortfolioInnerProjects/PortfolioInnerProjects';
import CaseInfo from '../components/Pages/PortfolioInner/CaseInfo/CaseInfo';

const PortfolioInnerPage = ({ data, pageContext }) => {
  const portfolio = data.strapiPortfolio;
  let fadeY = React.useRef([]);
  fadeY.current = [];

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
  }, []);

  const fadeYRefs = (el) => {
    if (el && !fadeY.current.includes(el)) {
      fadeY.current.push(el);
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
            portfolio.Seo_title_ua,
            portfolio.Seo_title_ru,
            portfolio.Seo_title_en
          )}
          description={useLanguage(
            portfolio.Seo_description_ua,
            portfolio.Seo_description_ru,
            portfolio.Seo_description_en
          )}
        />
        <PortfolioMain
          projectName={useLanguage(
            portfolio.project_name_ua,
            portfolio.project_name_ru,
            portfolio.project_name_en
          )}
          title={useLanguage(
            portfolio.sub_title_ua,
            portfolio.sub_title_ru,
            portfolio.sub_title_en
          )}
          projectNumber={portfolio.project_number}
          images={portfolio.main_image}
        />
        {/* <PortfolioDescription
          dataFeature={portfolio.project_description}
          projectNumber={portfolio.project_number}
          titleNumber={'01.'}
          title={useLanguage(
            'опис проекту',
            'описание проекта',
            'describe the project'
          )}
          description={useLanguage(
            portfolio.description_ua,
            portfolio.description_ru,
            portfolio.description_en
          )}
        /> */}

        <CaseInfo
          info={portfolio.project_description}
          about={useLanguage(
            portfolio.description_ua,
            portfolio.description_ru,
            portfolio.description_en
          )}
          number={portfolio.project_number}
          ref={fadeYRefs}
          refreshFunc={refreshFunc}
        />

        <PortfolioInnerProjects
          portfolio={portfolio.gallery}
          pageContext={pageContext}
          ref={fadeYRefs}
          refreshFunc={refreshFunc}
        />

        <CrumbsNav
          crumbsNav={PortfolioInnerStatic.crumbsNav}
          title={useLanguage(
            portfolio.project_name_ua,
            portfolio.project_name_ru,
            portfolio.project_name_en
          )}
          slug={'/pf/' + portfolio.slug + '/'}
          ref={fadeYRefs}
        />
      </Layout>
    </>
  );
};

export default PortfolioInnerPage;

export const query = graphql`
  query PortfolioInnerPage($language: String!, $id: String!) {
    strapiPortfolio(id: { eq: $id }) {
      Seo_title_ua
      Seo_title_ru
      Seo_title_en
      Seo_description_ua
      Seo_description_ru
      Seo_description_en
      project_name_en
      project_name_ru
      project_name_ua
      sub_title_en
      sub_title_ru
      sub_title_ua
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
      description_en
      description_ru
      description_ua
      project_description {
        marker_en
        marker_ru
        marker_ua
        value_en
        value_ua
        value_ru
        type
      }
      gallery
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
