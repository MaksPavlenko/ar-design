import React from "react";
import useLanguage from "../hooks/useLanguage";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import Seo from "../components/Layout/seo";
import "../styles/style.sass";

import { contactsStatic } from "../db/contactsStatic";

import ContactsTitle from "../components/Pages/Contacts/ContactsTitle/ContactsTitle";
import ContactsMap from "../components/Pages/Contacts/ContactsMap/ContactsMap";
import ContactsInfo from "../components/Pages/Contacts/ContactsInfo/ContactsInfo";
import CrumbsNav from "../components/UI/CrumbsNav/CrumbsNav";

const ContactsPage = ({ data }) => {
  const langToggle = useLanguage;

  return (
    <>
      <Layout>
        <Seo title={langToggle("Контакти", "Контакты", "Contacts")} />
        <div className="contacts">
          <div className="contacts__wrapper">
            <ContactsTitle langToggle={langToggle} />
            <div className="contacts__main">
              <ContactsMap langToggle={langToggle} />
              <ContactsInfo
                langToggle={langToggle}
                dataContacts={data.strapiContacts}
              />
            </div>
          </div>
        </div>
        <CrumbsNav crumbsNav={contactsStatic.crumbsNav} />
      </Layout>
    </>
  );
};

export default ContactsPage;

export const query = graphql`
  query Contacts($language: String!) {
    strapiContacts {
      phones {
        id
        phone
      }
      messengers {
        id
        messenger
        link
      }
      socials {
        id
        title
        link
      }
      map
      address_ua
      address_ru
      address_en
      email
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
