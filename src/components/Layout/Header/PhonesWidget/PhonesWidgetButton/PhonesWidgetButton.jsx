import React from 'react';
import PropTypes from 'prop-types';

const PhonesWidgetButton = ({ dataContacts }) => {
  return (
    <div className="phone-widget__button">
      <div className="phone-widget__button-phone">
        {dataContacts.phones.map((item, index) => {
          if (index === 0) {
            return (
              <a
                href={`tel:` + item.phone.split(' ').join('')}
                className="button-phone__link"
                key={index}
              >
                {item.phone}
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="phone-widget__button-icon">
        <div className="button-icons__wrapper">
          <span className="circle-icon"></span>
          <span className="circle-icon"></span>
        </div>
      </div>
    </div>
  );
};

PhonesWidgetButton.propTypes = {
  dataContacts: PropTypes.object,
};

export default PhonesWidgetButton;
