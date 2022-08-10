import React from "react";
import PropTypes from "prop-types";
import FooterMain from "./FooterMain/FooterMain";
import FooterBottom from "./FooterBottom/FooterButtom";

import "./Footer";

const Footer = ({ dataContacts }) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterMain dataContacts={dataContacts} />
        <FooterBottom />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  dataContacts: PropTypes.object,
};

export default Footer;
