import React from 'react';
import useLanguage from '../hooks/useLanguage';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';
import '../styles/style.sass';
import { Portfolio, CrumbsNav } from '../components/Pages/Portfolio';
import { portfolioStatic } from '../db/portfolioStatic';

const PortfolioPage = ({ data }) => {
  const langToggle = useLanguage;
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
        <Seo title={langToggle('Портфоліо', 'Портфолио', 'Portfolio')} />
        <Portfolio
          subTitle={useLanguage('Портфоліо', 'Портфолио', 'Portfolio')}
          title={useLanguage(
            'Поєднання різних \nнапрямків та матеріалів',
            'Сочетание разных \nнаправлений и материалов',
            'A combination of different \ndirections and materials'
          
          )}
          gallery={data.allStrapiPortfolio.nodes}
          ref={fadeYRefs}
          refreshFunc={refreshFunc}
        />
        <CrumbsNav crumbsNav={portfolioStatic.crumbsNav} ref={fadeYRefs} />
      </Layout>
    </>
  );
};

export default PortfolioPage;

export const query = graphql`
  query PortfolioPage($language: String!) {
    allStrapiPortfolio(sort: { fields: id, order: DESC }) {
      nodes {
        project_name_ua
        project_name_ru
        project_name_en
        sub_title_ua
        sub_title_ru
        sub_title_en
        project_number
        award
        slug
        project_filter {
          title
        }
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
