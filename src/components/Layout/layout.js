import React from 'react';
import PropTypes from 'prop-types';
// import MediaQuery from 'react-responsive';
import { StaticQuery, graphql } from 'gatsby';

import { gsap } from 'gsap';

import Header from './Header/Header';
import Instagram from './Instagram/Instagram';
import Footer from './Footer/Footer';

import navigationData from '../../db/navigationData';

import DecorRight from '../../svg/decor_right.svg';
// import Fixed from './Fixed/Fixed';

const Layout = ({ children }) => {
  const dataNav = navigationData;

  let decorEl = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      decorEl,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: decorEl,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
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
          strapiInstagrams {
            instagram {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="app-container">
          <div className="decor-right" ref={(e) => (decorEl = e)}>
            <DecorRight />
          </div>
          {/* <Fixed /> */}
          <Header dataNav={dataNav} dataContacts={data.strapiContacts} />
          <main>{children}</main>
          {/* <MediaQuery minWidth={574}> */}
          <Instagram instaData={data.strapiInstagrams} />
          {/* </MediaQuery> */}
          <Footer dataContacts={data.strapiContacts} />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  dataNav: PropTypes.array,
  dataContacts: PropTypes.object,
};

export default Layout;
