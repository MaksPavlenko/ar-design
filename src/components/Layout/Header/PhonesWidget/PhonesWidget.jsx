import React from 'react';
import PropTypes from 'prop-types';

import PhonesWidgetButton from './PhonesWidgetButton/PhonesWidgetButton';
import PhonesWidgetDrop from './PhonesWidgetDrop/PhonesWidgetDrop';

const PhonesWidget = ({ dataContacts }) => {
  const [show, setShow] = React.useState(false);

  function moseEnterHendler() {
    setShow(true);
  }

  function mouseLeaveHendler() {
    setShow(false);
  }

  return (
    <div
      className={show ? 'phone-widget is-show' : 'phone-widget'}
      role="presentation"
      onMouseEnter={moseEnterHendler}
      onMouseLeave={mouseLeaveHendler}
    >
      <span className="phone-widget--bg"></span>
      <PhonesWidgetButton dataContacts={dataContacts} />
      <PhonesWidgetDrop dataContacts={dataContacts} show={show} />
    </div>
  );
};

PhonesWidget.propTypes = {
  dataContacts: PropTypes.object,
};

export default PhonesWidget;
