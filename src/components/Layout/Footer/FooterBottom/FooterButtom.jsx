import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import useLanguage from '../../../../hooks/useLanguage';
import Nunox from '../../../../svg/nunox.svg';

const FooterBottom = () => {
  const langToggle = useLanguage;

  return (
    <div className="footer__bottom">
      <div className="footer__political">
        <p className="footer__political-text">
          {langToggle(
            '2021 © AR Design. Всі права захищені',
            '2021 © AR Design. Все права защищены',
            '2021 © AR Design. All rights reserved'
          )}
        </p>
        <div className="footer__buttom-links">
          <Link className="footer__buttom-link" to="/">
            {langToggle('Конфіденційність', 'Конфиденциальность', 'Privacy')}
          </Link>
          <Link className="footer__buttom-link" to="/">
            {langToggle(
              'Угода Користувача',
              'Пользовательское соглашение',
              'Terms of use'
            )}
          </Link>
        </div>
      </div>
      <div className="footer__logo">
        <a className="footer__created" href="https://nunox.co/" target="blank">
          <span className="footer__created-title">Created by:</span>
          <span className="footer__svg">
            <Nunox />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
