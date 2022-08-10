import React from 'react';
// import PropTypes from 'prop-types';

import DetailsCaseItem from './DetailsCaseItem/DetailsCaseItem';
import DetailsCaseHeader from './DetailsCaseHeader/DetailsCaseHeader';

const DetailsCase = React.forwardRef((props, ref) => {
  const { info, number, show, setShow, refreshFunc } = props;
  const itemsArr = info.length;

  const items = info.map((item, index) => {
    return <DetailsCaseItem key={index} item={item} ref={ref} />;
  });

  console.log(itemsArr % 2 !== 0 ? 'нечетное' + itemsArr : 'четное');

  return (
    <div className="details-wrapper">
      <DetailsCaseHeader
        show={show}
        setShow={setShow}
        number={number}
        refreshFunc={refreshFunc}
        ref={ref}
      />
      <div
        className={
          show === 1
            ? 'details-items__wrapper is-show'
            : 'details-items__wrapper'
        }
        ref={ref}
      >
        <ul className={show === 1 ? 'details-items is-show' : 'details-items'}>
          {itemsArr % 2 !== 0 ? (
            <>
              {items}{' '}
              <li className="case-details__item case-details__item--odd"></li>
            </>
          ) : itemsArr % 2 === 0 ? (
            <>{items}</>
          ) : null}
        </ul>
      </div>
    </div>
  );
});

DetailsCase.propTypes = {};

export default DetailsCase;
