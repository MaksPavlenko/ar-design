import { useContext } from 'react';
import { I18nContext } from 'gatsby-plugin-react-i18next';

const useLanguage = (ukr, rus, eng) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  if (language === 'ua') {
    return ukr;
  } else if (language === 'ru') {
    return rus;
  } else if (language === 'en') {
    return eng;
  }
};

export default useLanguage;
