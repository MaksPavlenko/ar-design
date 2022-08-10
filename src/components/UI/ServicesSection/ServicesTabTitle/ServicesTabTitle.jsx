import React from 'react';
import TabTitleButton from './TabTitleButton';
import useLanguage from '../../../../hooks/useLanguage';

const ServicesTabTitle = ({ dataTabs, handleClick, active }) => {
  const langToggle = useLanguage;

  return (
    <div className="tabs-buttons">
      {dataTabs.map((item) => {
        return (
          <TabTitleButton
            key={item.id}
            title={langToggle(item.title_ua, item.title_ru, item.title_en)}
            id={item.id}
            active={active === item.id}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default ServicesTabTitle;
