import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import ArrowLink from "../../../svg/arrowlinkblack.svg";

const ButtonLink = ({ to, title }) => {
  return (
    <Link to={to} className="button-link">
      <span className="button-link--wrapper">
        <span className="link-title">{title}</span>
        <i className="link-icon">
          <ArrowLink />
        </i>
      </span>
    </Link>
  );
};

export default ButtonLink;
