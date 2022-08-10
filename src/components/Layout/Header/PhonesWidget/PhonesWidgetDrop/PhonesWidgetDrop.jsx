import React from 'react';
import PropTypes from 'prop-types';

import DropMessengers from './DropMessengers/DropMessengers';

const PhonesWidgetDrop = ({ dataContacts, show }) => {
  return (
    <div className={show ? 'phone-widget--drop is-show' : 'phone-widget--drop'}>
      {dataContacts.phones.map((item, index) => {
        if (index === 1) {
          return (
            <a
              href={`tel:` + item.phone.split(' ').join('')}
              className="phone-widget--drop-phone"
              key={index}
            >
              {item.phone}
            </a>
          );
        } else {
          return null;
        }
      })}
      <DropMessengers dataContacts={dataContacts} />
    </div>
  );
};

PhonesWidgetDrop.propTypes = {
  dataContacts: PropTypes.object,
  show: PropTypes.bool,
};

export default PhonesWidgetDrop;
