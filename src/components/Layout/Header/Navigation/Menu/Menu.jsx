import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
// import useLanguage from '../../../../../hooks/useLanguage';

import ArrowLink from '../../../../../svg/arrow_nav.svg';

const Menu = React.forwardRef(({ props, ref }) => {
  // const langToggle = useLanguage;

  return (
    <li className="menu-item" ref={ref}>
      <Link to={props.to} className="menu-item__link">
        <span className="menu-item__link-count">{props.counter}</span>
        <span className="menu-item__link-title">{props.title}</span>
        <span className="menu-item__link-icon">
          <ArrowLink />
        </span>
      </Link>
    </li>
  );
});

Menu.propTypes = {
  dataNav: PropTypes.array,
};

export default Menu;
