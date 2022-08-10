import React from 'react';
import useLanguage from '../../../../../hooks/useLanguage';
import Arrow from '../../../../../svg/arrow_nav.svg';

const FooterSocial = ({ dataContacts }) => {
  const langToggle = useLanguage;

  const socials = dataContacts.socials.map((socialLink) => (
    <a
      className="footer__link footer__link--social"
      key={socialLink.id}
      href={socialLink.link}
      target="blank"
    >
      <span>{socialLink.title}</span>
    </a>
  ));
  const messenger = dataContacts.messengers.map((messagerLink) => (
    <a
      className="footer__link footer__link--messenger"
      key={messagerLink.id}
      href={messagerLink.link}
      target="blank"
    >
      {messagerLink.messenger}
      <Arrow className="footer__arrow" />
    </a>
  ));
  return (
    <div className="footer__main-social">
      <div className="footer__text">
        <h2 className="footer__title">
          {langToggle(
            "Зв'яжіться з нами,\n щоб обговорити проект!",
            'Свяжитесь с нами,\n чтобы обсудить проект!',
            'Contact us\n to discuss the project!'
          )}
        </h2>
      </div>
      <div className="footer__messenger">{messenger}</div>
      <div className="footer__social">{socials}</div>
    </div>
  );
};

export default FooterSocial;
