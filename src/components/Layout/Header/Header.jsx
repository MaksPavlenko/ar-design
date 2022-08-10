import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import useScroll from '../../../hooks/useScroll';

import {
  Navigation,
  Burger,
  PhonesWidget,
  LanguagesDesctop,
  LanguagesMobile,
} from './index';
import LogoDesctop from '../../../svg/logo.svg';
import LogoMobile from '../../../svg/logo-mobile.svg';

const Header = ({ dataNav, dataContacts }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  function openMenu() {
    setOpen(!open);
  }

  const changePosition = 100;
  let scroller = useScroll();

  if (scroller > changePosition && !scroll) {
    setScroll(true);
  }

  if (scroller <= changePosition && scroll) {
    setScroll(false);
  }

  return (
    <div className="header-wrapper">
      <div className={open ? 'overlay is-open' : 'overlay'}></div>
      <Navigation
        openMenu={openMenu}
        open={open}
        dataNav={dataNav}
        dataContacts={dataContacts}
      />
      <header
        className={
          open ? 'header is-open' : scroll ? 'header is-scroll' : 'header'
        }
      >
        <Burger openMenu={openMenu} open={open} />
        <LanguagesMobile />

        <Link to="/" className={open ? 'logo is-open' : 'logo'}>
          <LogoDesctop className="logo-desctop" />
          <LogoMobile className="logo-mobile" />
        </Link>
        <div className={open ? 'header-right is-open' : 'header-right'}>
          <LanguagesDesctop />
          <PhonesWidget dataContacts={dataContacts} />
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  dataNav: PropTypes.array,
  dataContacts: PropTypes.object,
};

export default Header;
