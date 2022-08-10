import React from 'react';

const TabLink = ({ active, children }) => {
  return (
    <div className={!active ? 'service-link' : 'service-link is-active'}>
      {children}
    </div>
  );
};

export default TabLink;
