import React from 'react';
import useLanguage from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/Layout/seo';

import { graphql } from 'gatsby';

// import articleData from "../db/articleData";
import contactsData from '../db/contactsData';
import { blogInnerStatic } from '../db/blogInnerStatic';

import BlogInnerSlider from '../components/Pages/BlogInner/BlogInnerSlider/BlogInnerSlider';
import BlogInnerMain from '../components/Pages/BlogInner/BlogInnerMain/BlogInnerMain';
import BlogInnerFooter from '../components/Pages/BlogInner/BlogInnerFooter/BlogInnerFooter';
import BlogInnerArticle from '../components/Pages/BlogInner/BlogInnerArticle/BlogInnerArticle';
import CrumbsNav from '../components/UI/CrumbsNav/CrumbsNav';

import '../styles/style.sass';

const BlogInnerPage = ({ data, pageContext }) => {
  const langToggle = useLanguage;
  const dataBlog = data.strapiBlogs;
  // const { previous, next } = data;
  // console.log(pageContext);
  return (
    <>
      <Layout>
        <Seo
          title={langToggle(
            dataBlog.seo_title_ua,
            dataBlog.seo_title_ru,
            dataBlog.seo_title_en
          )}
          description={langToggle(
            dataBlog.seo_description_ua,
            dataBlog.seo_description_ru,
            dataBlog.seo_description_en
          )}
        />
        <BlogInnerMain dataArticle={dataBlog} />
        <BlogInnerArticle dataContent={dataBlog.article_content} />

        {dataBlog.blog_gallery.length > 0 ? (
          <BlogInnerSlider carousel={dataBlog.blog_gallery} />
        ) : null}

        <BlogInnerFooter
          dataContacts={contactsData}
          langToggle={langToggle}
          pageContext={pageContext}
        />
        <CrumbsNav
          crumbsNav={blogInnerStatic.crumbsNav}
          title={useLanguage(
            dataBlog.title_ua,
            dataBlog.title_ru,
            dataBlog.title_en
          )}
          slug={'/blog/' + data.strapiBlogs.slug + '/'}
        />
      </Layout>
    </>
  );
};

export default BlogInnerPage;

export const query = graphql`
  query BlogArticles($language: String!, $id: String!) {
    strapiBlogs(id: { eq: $id }) {
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
      blog_gallery {
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
      date
      article_content
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
