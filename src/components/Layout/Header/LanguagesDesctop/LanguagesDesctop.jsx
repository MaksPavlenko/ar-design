import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import useLanguage from '../../../../hooks/useLanguage';
import Circle from '../../../../svg/circle.svg';

const LanguagesDesctop = () => {
  const langToggle = useLanguage;

  const { languages, originalPath } = useI18next();
  const [show, setShow] = React.useState(false);

  function moseEnterHendler() {
    setShow(true);
  }

  function mouseLeaveHendler() {
    setShow(false);
  }

  return (
    <div
      role="presentation"
      className={show ? 'languages-desctop is-show' : 'languages-desctop'}
      onMouseEnter={moseEnterHendler}
      onMouseLeave={mouseLeaveHendler}
    >
      <span className="language-button--bg"></span>
      <button className="language-button">
        <span className="language-button--wrapper">
          <span className="language-button--title">
            <span className="current-language">
              {langToggle('UA', 'RU', 'EN')}
            </span>
          </span>
          <span className="language-button--title">
            <Circle />
          </span>
        </span>
      </button>
      <ul className={show ? 'languages-list is-show' : 'languages-list'}>
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesDesctop;
