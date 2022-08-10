import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import AboutCaseHeader from './AboutCaseHeader/AboutCaseHeader';

const AboutCase = React.forwardRef((props, ref) => {
  const { about, show, setShow, refreshFunc } = props;

  return (
    <div className="about-case__wrapper" ref={ref}>
      <AboutCaseHeader
        ref={ref}
        show={show}
        setShow={setShow}
        refreshFunc={refreshFunc}
      />
      <div className="about-case__descr--container" ref={ref}>
        <div
          className={
            show === 2
              ? 'about-case__descr--wrapper is-show'
              : 'about-case__descr--wrapper'
          }
        >
          <ReactMarkdown className="about-case__descr" children={about} />
        </div>
      </div>
    </div>
  );
});

// AboutCase.propTypes = {};

export default AboutCase;
