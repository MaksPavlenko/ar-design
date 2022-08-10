import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { scroller } from "react-scroll";
import useLanguage from "../../../../../hooks/useLanguage";

const PortfolioFilter = ({
  toggleButton,
  active,
  gallery,
  setGalleryState,
}) => {
  const langToggle = useLanguage;

  function scrollDown() {
    scroller.scrollTo("portfolio-gallery", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  let itemEl = React.useRef([]);
  itemEl.current = [];

  React.useEffect(() => {
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
          duration: 1.4,
          delay: 0.6,
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !itemEl.current.includes(el)) {
      itemEl.current.push(el);
    }
  };

  const buttons = [
    { id: 1, title: "30-50" },
    { id: 2, title: "50-100" },
    { id: 3, title: "100-1500" },
  ];

  return (
    <div className="filter" ref={addToRefs}>
      <button
        className={
          active === null
            ? "filter__button filter__button-active"
            : "filter__button"
        }
        onClick={() => {
          scrollDown();
          toggleButton(null);
          setGalleryState(gallery);
        }}
      >
        {langToggle("Всі", "Все", "All")}
      </button>
      {buttons.map((but, index) => {
        return (
          <button
            className={
              active === index
                ? "filter__button filter__button-active"
                : "filter__button"
            }
            value={but.title}
            onClick={e => {
              scrollDown();
              toggleButton(index);
              setGalleryState(
                gallery.filter(it => {
                  return it.project_filter.title.indexOf(e.target.value) > -1;
                })
              );
            }}
            key={index}
          >
            {but.title}
            <span>
              M<sup>2</sup>
            </span>
          </button>
        );
      })}
    </div>
  );
};

PortfolioFilter.propTypes = {
  toggleButton: PropTypes.func,
  gallery: PropTypes.array,
};

export default PortfolioFilter;
