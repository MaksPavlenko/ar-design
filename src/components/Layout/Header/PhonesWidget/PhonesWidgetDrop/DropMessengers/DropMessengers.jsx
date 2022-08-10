import React from 'react';
import PropTypes from 'prop-types';

import ViberIcon from '../../../../../../svg/viber.svg';
import TelegramIcon from '../../../../../../svg/telegram.svg';
import WhatsUpIcon from '../../../../../../svg/whatsup.svg';

const DropMessengers = ({ dataContacts }) => {
  return (
    <ul className="drop-messengers">
      {dataContacts.messengers.map((item, index) => {
        if (item.messenger === 'Viber') {
          return (
            <li className="drop-messengers--item" key={index}>
              <a href={item.link} className="drop-messengers--item-link">
                <ViberIcon />
              </a>
            </li>
          );
        } else if (item.messenger === 'Telegram') {
          return (
            <li className="drop-messengers--item" key={index}>
              <a href={item.link} className="drop-messengers--item-link">
                <TelegramIcon />
              </a>
            </li>
          );
        } else {
          return (
            <li className="drop-messengers--item" key={index}>
              <a href={item.link} className="drop-messengers--item-link">
                <WhatsUpIcon />
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

DropMessengers.propTypes = {
  dataContacts: PropTypes.object,
};

export default DropMessengers;
