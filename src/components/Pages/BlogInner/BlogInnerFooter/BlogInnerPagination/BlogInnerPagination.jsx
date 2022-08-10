import React from "react";
import { Link } from "gatsby";
import ArrowLeft from "../../../../../svg/arrow-left.svg";
import ArrowRight from "../../../../../svg/arrow-right.svg";

const BlogInnerPagination = ({ textLeft, textRight, pageContext }) => {
  const {next, previous } = pageContext
  return (
    <div className="blog-inner__pagination">
      <div className="blog-inner__pagination-wrapper">
        <div className="blog-inner__arrow blog-inner__arrow--left">
        { next && (
          <Link className="blog-inner__link blog-inner__link--left" to={'/blog/' + next.slug}>
            <div className="blog-inner__arrow">
              <ArrowLeft />
            </div>

            <span className="arrow-left">{textLeft}</span>
          </Link>
        )}
        </div>
        <div className="blog-inner__arrow blog-inner__arrow--right">
        { previous && (
          <Link className="blog-inner__link blog-inner__link--right" to={'/blog/' + previous.slug}>
            <div className="blog-inner__arrow blog-inner__arrow--reverse">
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

export default BlogInnerPagination;
