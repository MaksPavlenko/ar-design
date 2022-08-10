import React from "react";
import PropTypes from "prop-types";
import { gsap, Expo } from "gsap";
// import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";
import useLanguage from "../../../../hooks/useLanguage";

import LanguagesMobile from "../LanguagesMobile/LanguagesMobile";
import SocialsNav from "../../../UI/Socials/SocialsNav";

import ArrowLink from "../../../../svg/arrow_nav.svg";

const Navigation = ({ openMenu, open, dataNav, dataContacts }) => {
  
  const langToggle = useLanguage;


  const [tl] = React.useState(gsap.timeline({ paused: true }));

  let navLink = React.useRef([]);
  let nav = React.useRef(null);
  let imgWrap = React.useRef(null);

  React.useEffect(() => {
    tl.to(nav, 0.6, { y: 0, ease: Expo.easeInOut })
      .to(imgWrap, 0.6, { y: 0, ease: Expo.easeInOut, delay: -0.5 })
      .staggerTo(
        navLink.current,
        0.5,
        { y: 0, opacity: 1, ease: Expo.easeInOut, delay: -0.5 },
        0.02
      )
      .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  return (
    <div className="navigation-wrapper">
      <nav className="navigation" ref={e => (nav = e)}>
        <LanguagesMobile />

        <ul className="menu">
          {dataNav.map((item, index) => {
            const count = ++index;
            return (
              <li
                className="menu-item"
                key={index}
                ref={e => (navLink.current[item.id] = e)}
              >
                <Link
                  to={item.link}
                  className="menu-item__link"
                  onClick={openMenu}
                >
                  <span className="menu-item__link-count">
                    {index <= 9 ? "0" + count + "." : count + "."}
                  </span>
                  <span className="menu-item__link-title">
                    {langToggle(item.title_ua, item.title_ru, item.title_en)}
                  </span>
                  <span className="menu-item__link-icon">
                    <ArrowLink />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <SocialsNav
          dataContacts={dataContacts}
          openMenu={openMenu}
          open={open}
        />
      </nav>
      <div className="navigation-image" ref={e => (imgWrap = e)}>
        <StaticImage
          src="../../../../images/menubg.jpg"
          alt="bg"
          placeholder="blurred"
          className="navigation-image__bg"
        />
      </div>
    </div>
  );
};

Navigation.propTypes = {
  dataNav: PropTypes.array,
  dataContacts: PropTypes.object,
  open: PropTypes.bool,
  openMenu: PropTypes.func,
};

export default Navigation;
