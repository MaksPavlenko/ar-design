import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactsInfo = ({ dataContacts, langToggle }) => {
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
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  const phones = dataContacts.phones.map((link) => (
    <a
      className="contacts__link contacts__link--tel"
      key={link.id}
      href={`tel:` + link.phone.split(' ').join('')}
    >
      {link.phone}
    </a>
  ));
  const socials = dataContacts.socials.map((socialLink) => (
    <a
      className="contacts__link contacts__link--social"
      key={socialLink.id}
      href={socialLink.link}
      target="blank"
    >
      <span>{socialLink.title}</span>
    </a>
  ));
  return (
    <div className="contacts__info">
      <address
        className="contacts__block contacts__block--address"
        ref={addToRefs}
      >
        <span className="contacts__info-marker">
          {langToggle('Адреса:', 'Адрес:', 'Address:')}
        </span>
        <a
          target="blank"
          className="contacts__link contacts__link--address"
          href={dataContacts.map}
        >
          {langToggle(
            dataContacts.address_ua,
            dataContacts.address_ru,
            dataContacts.address_en
          )}
        </a>
      </address>
      <div className="contacts__block contacts__block--tel" ref={addToRefs}>
        <span className="contacts__info-marker">
          {langToggle('Телефони:', 'Телефоны:', 'Phones:')}
        </span>
        {phones}
      </div>
      <div className="contacts__block contacts__block--email" ref={addToRefs}>
        <span className="contacts__info-marker">E-mail:</span>
        <a
          className="contacts__link contacts__link--email"
          href={'mailto:' + dataContacts.email}
        >
          {dataContacts.email}
        </a>
      </div>
      <div className="contacts__block contacts__block--social" ref={addToRefs}>
        {socials}
      </div>
    </div>
  );
};

export default ContactsInfo;
