import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import Seo from "../components/Layout/seo";
import useLanguage from "../hooks/useLanguage";
import CrumbsNav from "../components/UI/CrumbsNav/CrumbsNav";
import PageNot from "../components/Pages/404/PageNot";

import { pageNotStatic } from "../db/pageNotStatic";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("404: Not found")} />
      <PageNot
        to={"/"}
        buttonTitle={useLanguage(
          pageNotStatic.button_title_ua,
          pageNotStatic.button_title_ru,
          pageNotStatic.button_title_en
        )}
        title={useLanguage(
          pageNotStatic.title_ua,
          pageNotStatic.title_ru,
          pageNotStatic.title_en
        )}
      />
      <CrumbsNav crumbsNav={pageNotStatic.crumbsNav} />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query($language: String!) {
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
