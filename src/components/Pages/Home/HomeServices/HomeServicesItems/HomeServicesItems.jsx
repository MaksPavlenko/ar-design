import React from 'react';
import PropTypes from 'prop-types';

import ServicesItem from './ServicesItem/ServicesItem';

const HomeServicesItems = React.forwardRef((props, ref) => {
  return (
    <div className="home-services__items--wrapper">
      <div className="home-services__items--list">
        <div className="animate-line animate-line__top" ref={ref}></div>
        {props.items.map((item, index) => {
          return <ServicesItem key={index} item={item} ref={ref} />;
        })}
        <div className="animate-line animate-line__bottom" ref={ref}></div>
      </div>
    </div>
  );
});

HomeServicesItems.propTypes = {
  items: PropTypes.array,
};

export default HomeServicesItems;
