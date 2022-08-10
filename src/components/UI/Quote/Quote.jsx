import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../hooks/useLanguage';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import QuotationMarkTop from '../../../svg/quotetop.svg';
import QuotationMarkDown from '../../../svg/quotedown.svg';

const Quote = React.forwardRef((props, ref) => {
  const { quotes } = props;
  // let itemEl = React.useRef([]);
  // itemEl.current = [];

  // React.useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   itemEl.current.forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       {
  //         opacity: 0,
  //         y: 150,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.2,
  //         delay: 0.3,
  //         scrollTrigger: {
  //           trigger: el,

  //           start: 'top bottom',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );
  //   });
  // }, []);

  // const addToRefs = (el) => {
  //   if (el && !itemEl.current.includes(el)) {
  //     itemEl.current.push(el);
  //   }
  // };

  return (
    <section className="quote-section default-section">
      <div className="quote">
        <span className="quote-mark" ref={ref}>
          <QuotationMarkTop />
        </span>
        <p className="quote-text" ref={ref}>
          {useLanguage(quotes.quote_ua, quotes.quote_ru, quotes.quote_en)}
        </p>
        <span className="quote-caption" ref={ref}>
          -{' '}
          {useLanguage(quotes.caption_ua, quotes.caption_ru, quotes.caption_en)}
        </span>
        <span className="quote-mark" ref={ref}>
          <QuotationMarkDown />
        </span>
      </div>
    </section>
  );
});

Quote.propTypes = {
  quotes: PropTypes.object,
};

export default Quote;
