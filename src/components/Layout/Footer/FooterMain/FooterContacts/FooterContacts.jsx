import React from "react";
import useLanguage from "../../../../../hooks/useLanguage";

const FooterContacts = ({ dataContacts }) => {
  const langToggle = useLanguage;

  const phones = dataContacts.phones.map((link) => (
    <a
      className="footer__link footer__link--tel"
      key={link.id}
      href={`tel:` + link.phone.split(" ").join("")}
    >
      {link.phone}
    </a>
  ));
  return (
    <div className="footer__contacts">
      <address className="footer__address">
        <span className="footer__marker">
          {langToggle("Адреса:", "Адрес:", "Address:")}
        </span>
        <a
          target="blank"
          className="footer__link footer__address-link"
          href={dataContacts.map}
        >
          {langToggle(
            dataContacts.address_ua,
            dataContacts.address_ru,
            dataContacts.address_en
          )}
        </a>
      </address>
      <div className="footer__tel">
        <span className="footer__marker">
          {langToggle("Телефони:", "Телефоны:", "Phones:")}
        </span>
        {phones}
      </div>
      <div className="footer__email">
        <span className="footer__marker">E-mail:</span>
        <a
          className="footer__link footer__link--email"
          href={"mailto:" + dataContacts.email}
        >
          {dataContacts.email}
        </a>
      </div>
    </div>
  );
};

export default FooterContacts;
