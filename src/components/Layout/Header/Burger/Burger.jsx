import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ openMenu, open }) => {
  return (
    <button className={open ? 'burger is-open' : 'burger'} onClick={openMenu}>
      <span className="burger-line burger-line--1"></span>
      <span className="burger-line burger-line--2"></span>
    </button>
  );
};

Burger.propTypes = {
  openMenu: PropTypes.func,
  open: PropTypes.bool,
};

export default Burger;
