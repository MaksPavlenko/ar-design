import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import {
  FactItemBig,
  FactItemColumn,
  FactItemMiddle,
  FactItemSmall,
} from './FactItemSystem/FactItemSystem';

const FactsItems = React.forwardRef((props, ref) => {
  const { facts } = props;
  const langToggle = useLanguage;

  return (
    <div className="facts-items">
      <FactItemColumn>
        {facts.items.map((item, index) => {
          if (index === 0) {
            return (
              <FactItemSmall
                key={index}
                count={item.number}
                description={langToggle(
                  item.title_ua,
                  item.title_ru,
                  item.title_en
                )}
                ref={ref}
              />
            );
          } else if (index === 1) {
            return (
              <FactItemMiddle
                key={index}
                count={item.number}
                description={langToggle(
                  item.title_ua,
                  item.title_ru,
                  item.title_en
                )}
                ref={ref}
              />
            );
          } else {
            return null;
          }
        })}
      </FactItemColumn>
      <FactItemColumn>
        {facts.items.map((item, index) => {
          if (index === 2) {
            return (
              <FactItemBig
                key={index}
                count={item.number}
                description={langToggle(
                  item.title_ua,
                  item.title_ru,
                  item.title_en
                )}
                cover={item.cover}
                ref={ref}
              />
            );
          } else {
            return null;
          }
        })}
      </FactItemColumn>

      <FactItemColumn>
        {facts.items.map((item, index) => {
          if (index === 3) {
            return (
              <FactItemMiddle
                key={index}
                count={item.number}
                description={langToggle(
                  item.title_ua,
                  item.title_ru,
                  item.title_en
                )}
                ref={ref}
              />
            );
          } else if (index === 4) {
            return (
              <FactItemSmall
                key={index}
                count={item.number}
                description={langToggle(
                  item.title_ua,
                  item.title_ru,
                  item.title_en
                )}
                ref={ref}
              />
            );
          } else {
            return null;
          }
        })}
      </FactItemColumn>
    </div>
  );
});

FactsItems.propTypes = {
  facts: PropTypes.object,
};

export default FactsItems;
