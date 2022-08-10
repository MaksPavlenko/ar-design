import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const LanguagesMobile = () => {
  const { languages, originalPath } = useI18next();

  return (
    <ul className="languages-mobile">
      {languages.map((lng) => (
        <li key={lng}>
          <Link to={originalPath} language={lng}>
            {lng}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguagesMobile;
