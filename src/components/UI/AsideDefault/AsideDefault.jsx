import React from 'react';
import StickyBox from 'react-sticky-box';

const AsideDefault = ({ children, offsetTop }) => {
  return (
    <StickyBox offsetTop={offsetTop}>
      <aside className="aside-default">{children}</aside>
    </StickyBox>
  );
};

export default AsideDefault;
