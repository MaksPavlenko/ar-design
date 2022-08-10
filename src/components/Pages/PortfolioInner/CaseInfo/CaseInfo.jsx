import React from 'react';

import AboutCase from './AboutCase/AboutCase';
import DetailsCase from './DetailsCase/DetailsCase';

const CaseInfo = React.forwardRef((props, ref) => {
  const { info, about, number, refreshFunc } = props;
  const [show, setShow] = React.useState(null);

  return (
    <section className="case-info default-section">
      <div className="section-wrapper">
        <DetailsCase
          info={info}
          number={number}
          show={show}
          setShow={setShow}
          refreshFunc={refreshFunc}
          ref={ref}
        />
        <AboutCase
          about={about}
          show={show}
          setShow={setShow}
          refreshFunc={refreshFunc}
          ref={ref}
        />
      </div>
    </section>
  );
});

export default CaseInfo;
