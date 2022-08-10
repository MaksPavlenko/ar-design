import React from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLanguage from '../../../../../hooks/useLanguage';

const Accordion = React.forwardRef((props, ref) => {
  const { items, refreshFunc } = props;

  const [activeItemID, setActiveItemID] = React.useState(0);

  const langToggle = useLanguage;

  // let itemEl = React.useRef([]);
  // itemEl.current = [];

  // React.useEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);

  //   itemEl.current.forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       {
  //         opacity: 0,
  //         y: 100,
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

  // function toggleAccordion(id) {
  //   if (activeItemID === id) {
  //     setActiveItemID(0);
  //   } else {
  //     setActiveItemID(id);
  //   }
  // }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const count = index + 1;

        return (
          <div className="accordion-item" key={index} id={item.id} ref={ref}>
            <div
              role="presentation"
              className={
                activeItemID === item.id ? 'question is-active' : 'question'
              }
              onClick={() => {
                setActiveItemID(activeItemID === item.id ? 0 : item.id);
                refreshFunc();
              }}
            >
              <div className="question-left">
                <span className="question-count">
                  {index <= 9 ? '0' + count + '.' : count + '.'}
                </span>
              </div>
              <div className="question-right">
                <h3 className="question-title">
                  {langToggle(item.title_ua, item.title_ru, item.title_en)}
                </h3>
                <i className="accordion-icon">
                  <span className="icon-line icon-line__1"></span>
                  <span className="icon-line icon-line__2"></span>
                </i>
              </div>
            </div>
            <div
              className={
                activeItemID === item.id ? 'answer is-active' : 'answer'
              }
            >
              <div className="answer-wrapper">
                <p className="answer-title">
                  {langToggle(
                    item.content_ua,
                    item.content_ru,
                    item.content_en
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Accordion;
