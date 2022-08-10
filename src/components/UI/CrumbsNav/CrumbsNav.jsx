import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLanguage from '../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const CrumbsNav = React.forwardRef((props, ref) => {
  const { crumbsNav, slug, title } = props;
  const langToggle = useLanguage;
  // let itemEl = React.useRef(null);

  // React.useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     itemEl,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.2,
  //       delay: 0.3,
  //       scrollTrigger: {
  //         trigger: itemEl,
  //         start: "top bottom",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="crumbs-nav__wrapper">
      <ul className="crumbs-nav" ref={ref}>
        {crumbsNav.map((item, index) => {
          return (
            <li className="crumbs-nav__item" key={index}>
              <Link className="crumbs-naw__item-link" to={item.link}>
                {langToggle(item.title_ua, item.title_ru, item.title_en)}
              </Link>
            </li>
          );
        })}
        {slug ? (
          <li className="crumbs-nav__item">
            <Link className="crumbs-naw__item-link" to={slug}>
              {title}
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
});

CrumbsNav.propTypes = {
  crumbsNav: PropTypes.array,
};

export default CrumbsNav;
