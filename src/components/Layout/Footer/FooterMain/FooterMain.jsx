import React from "react";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterButton from "./FooterButton/FooterButton";

const FooterMain = ({ dataContacts }) => {
  return (
    <div className="footer__main">
      <FooterSocial dataContacts={dataContacts} />
      <FooterContacts dataContacts={dataContacts} />
      <FooterButton />
    </div>
  );
};

export default FooterMain;
