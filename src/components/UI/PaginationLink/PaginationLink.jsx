import React from "react";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowLeft from "../../../svg/arrow-left.svg";
import ArrowRight from "../../../svg/arrow-right.svg";
import PropTypes from "prop-types";

const BlogInnerPagination = ({ textLeft, textRight, pageContext }) => {
  const {next, previous} = pageContext
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

  return (
    <div className="pagination">
      <div className="pagination__wrapper">
        <div
          className="pagination__arrow pagination__arrow--left"
          ref={addToRefs}
        >
          {next && (
            <Link className="pagination__link pagination__link--left" to={'/pf/' + next.slug}>
            <div className="pagination__arrow">
              <ArrowLeft />
            </div>

            <span className="arrow-left">{textLeft}</span>
          </Link>
          )}
          
        </div>
        <div
          className="pagination__arrow pagination__arrow--right"
          ref={addToRefs}
        >
          {previous && (
            <Link className="pagination__link pagination__link--right" to={'/pf/' + previous.slug}>
            <div className="pagination__arrow pagination__arrow--reverse">
              <ArrowRight />
            </div>

            <span className="arrow-right">{textRight}</span>
          </Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

BlogInnerPagination.propTypes = {
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
};

export default BlogInnerPagination;
