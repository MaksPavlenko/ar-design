import React from "react";
import PropTypes from "prop-types";
import { gsap, Expo } from "gsap";

const SocialsNav = ({ dataContacts, open, openMenu }) => {
  const [tl] = React.useState(gsap.timeline({ paused: true }));

  let itemEl = React.useRef([]);
  itemEl.current = [];


  React.useEffect(() => {
    itemEl.current.forEach((el, index) => {
      tl.staggerFromTo(
        el,
        0.6,
        { y: -20, opacity: 0, ease: Expo.easeInOut, delay: -0.5 },
        { y: 0, opacity: 1, ease: Expo.easeInOut, delay: -0.5 },
        0.02
      ).reverse();
    });
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  return (
    <ul
      className={
        open
          ? "socials socials-navigation is-open"
          : "socials socials-navigation"
      }
    >
      {dataContacts.socials.map((item, index) => {
        return (
          <li
            className="socials-item socials-item__nav"
            key={index}
            ref={addToRefs}
          >
            <a
              href={item.link}
              target="blank"
              className="socials-item__link"
              onClick={openMenu}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialsNav.propTypes = {
  dataContacts: PropTypes.object,
  openMenu: PropTypes.func,
  open: PropTypes.bool,
};

export default SocialsNav;
