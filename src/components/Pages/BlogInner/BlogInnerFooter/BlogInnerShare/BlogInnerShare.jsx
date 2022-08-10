import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PropTypes from "prop-types";

const BlogInnerShare = ({ dataContacts, langToggle }) => {
  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    itemEl.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  // const social = dataContacts.socials.map((link, index) => (
  //   <li className="blog-inner__share-item" key={index}>
  //     <a className="blog-inner__share-link" href={link.link} key={link.id}>
  //       {link.title}
  //     </a>
  //   </li>
  // ));

  return (
    <div className="blog-inner__share" ref={addToRefs}>
      <div className="blog-inner__share-wrapper">
        <span className="blog-inner__share-title">
          {langToggle("Поділитися:", "Поделиться:", "Share:")}
        </span>
        {/* <ul className="blog-inner__share-list">{social}</ul> */}
        <div className="s9-widget-wrapper"></div>
      </div>
    </div>
  );
};

// BlogInnerShare.propTypes = {};

export default BlogInnerShare;
