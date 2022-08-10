import React from 'react';

const TabTitleButton = ({ active, handleClick, id, title }) => {
  return (
    <button
      className={!active ? 'tab-button' : 'tab-button is-active'}
      onClick={handleClick}
      id={id}
    >
      <span className="tab-button__border">{title}</span>
    </button>
  );
};

export default TabTitleButton;
