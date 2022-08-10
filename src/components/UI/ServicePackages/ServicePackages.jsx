import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../hooks/useLanguage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useMediaQuery } from 'react-responsive';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import SectionHeader from '../SectionHeader/SectionHeader';

const langToggle = useLanguage;

const ServicePackages = ({
  markerCount,
  markerTitle,
  sectionTitle,
  dataServices,
}) => {
  const isMobile = useBreakpoint();
  const [open, setOpen] = React.useState(null);

  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }

    itemEl.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            markers: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  function refreshFunc() {
    // ScrollTrigger.refresh();
    ScrollTrigger.refresh(true);
  }

  if (isMobile.sm) {
    refreshFunc();
  }

  // return (
  //   <section className="packages-section">
  //     <SectionHeader
  //       markerCount={markerCount}
  //       markerTitle={markerTitle}
  //       sectionTitle={sectionTitle}
  //     />
  //     <div className="packages">
  //       {dataServices.map((pack, index) => {
  //         const count = ++index;
  //         return (
  //           <div className="packages-item" key={index} ref={addToRefs}>
  //             <div className="packages-item__header">
  //               <span className="packages-item__header-marker">
  //                 {langToggle(
  //                   'Пакет №0' + count,
  //                   'Пакет №0' + count,
  //                   'Package #0' + count
  //                 )}
  //               </span>
  //               <span className="packages-item__header-title">
  //                 {langToggle(pack.title_ua, pack.title_ru, pack.title_en)}
  //               </span>
  //             </div>
  //             {isMobile ? (
  //               <>
  //                 <ul className="packages-item__list">
  //                   {pack.list.map((item, index) => {
  //                     if (index <= 2) {
  //                       return (
  //                         <li className="packages-item__list-item" key={index}>
  //                           {langToggle(
  //                             item.title_ua,
  //                             item.title_ru,
  //                             item.title_en
  //                           )}
  //                         </li>
  //                       );
  //                     } else {
  //                       return (
  //                         <li
  //                           className={
  //                             open === count
  //                               ? 'packages-item__list-item list-item__hide is-show'
  //                               : 'packages-item__list-item list-item__hide'
  //                           }
  //                           key={index}
  //                         >
  //                           {langToggle(
  //                             item.title_ua,
  //                             item.title_ru,
  //                             item.title_en
  //                           )}
  //                         </li>
  //                       );
  //                     }
  //                   })}
  //                 </ul>
  //                 <button
  //                   className="packages-item__button"
  //                   onClick={() => setOpen(open === count ? null : count)}
  //                 >
  //                   <span className="packages-item__button-title">
  //                     {open === count
  //                       ? langToggle('Приховати', 'Скрыть', 'Hide')
  //                       : langToggle(
  //                           'Показати більше',
  //                           'Показать больше',
  //                           'Show more'
  //                         )}
  //                   </span>
  //                   <span
  //                     className={
  //                       open === count
  //                         ? 'packages-item__button-icon is-show'
  //                         : 'packages-item__button-icon'
  //                     }
  //                   ></span>
  //                 </button>
  //               </>
  //             ) : (
  //               <ul className="packages-item__list">
  //                 {pack.list.map((item, index) => {
  //                   return (
  //                     <li className="packages-item__list-item" key={index}>
  //                       {langToggle(
  //                         item.title_ua,
  //                         item.title_ru,
  //                         item.title_en
  //                       )}
  //                     </li>
  //                   );
  //                 })}
  //               </ul>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </section>
  // );
  return (
    <section className="packages-section">
      <SectionHeader
        markerCount={markerCount}
        markerTitle={markerTitle}
        sectionTitle={sectionTitle}
      />
      <div className="packages">
        {dataServices.map((pack, index) => {
          const count = ++index;
          return (
            <div className="packages-item" key={index} ref={addToRefs}>
              <div className="packages-item__header">
                <span className="packages-item__header-marker">
                  {langToggle(
                    'Пакет №0' + count,
                    'Пакет №0' + count,
                    'Package #0' + count
                  )}
                </span>
                <span className="packages-item__header-title">
                  {langToggle(pack.title_ua, pack.title_ru, pack.title_en)}
                </span>
              </div>

              <ul className="packages-item__list">
                {pack.list.map((item, index) => {
                  if (index <= 2) {
                    return (
                      <li className="packages-item__list-item" key={index}>
                        {langToggle(
                          item.title_ua,
                          item.title_ru,
                          item.title_en
                        )}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        className={
                          open === count
                            ? 'packages-item__list-item list-item__hide is-show'
                            : 'packages-item__list-item list-item__hide'
                        }
                        key={index}
                      >
                        {langToggle(
                          item.title_ua,
                          item.title_ru,
                          item.title_en
                        )}
                      </li>
                    );
                  }
                })}
              </ul>
              <button
                className="packages-item__button"
                onClick={() => {
                  setOpen(open === count ? null : count);
                  refreshFunc();
                }}
              >
                <span className="packages-item__button-title">
                  {open === count
                    ? langToggle('Приховати', 'Скрыть', 'Hide')
                    : langToggle(
                        'Показати більше',
                        'Показать больше',
                        'Show more'
                      )}
                </span>
                <span
                  className={
                    open === count
                      ? 'packages-item__button-icon is-show'
                      : 'packages-item__button-icon'
                  }
                ></span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

ServicePackages.propTypes = {
  markerCount: PropTypes.string,
  markerTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  dataServices: PropTypes.array,
};

export default ServicePackages;
