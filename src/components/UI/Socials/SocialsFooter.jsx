import React from 'react';
import PropTypes from 'prop-types';

const SocialsFooter = ({ dataContacts }) => {
  return (
    <ul className="socials">
      {dataContacts.socials.map((item, index) => {
        return (
          <li className="socials-item" key={index}>
            <a href={item.link} target="blank" className="socials-item__link">
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialsFooter.propTypes = {
  dataContacts: PropTypes.object,
};

export default SocialsFooter;
