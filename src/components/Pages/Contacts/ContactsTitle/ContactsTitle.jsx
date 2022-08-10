import React from "react";
import MainScreenTitle from "../../../UI/MainScreenHeader/MainScreenHeader";
// import PropTypes from 'prop-types';

const ContactsMain = ({ langToggle }) => {
  return (
    <MainScreenTitle
      title={langToggle(
        "Ми знаємо, як втілити \n твою мрію",
        "Мы знаем, как воплотить \n твою мечту",
        "We know how to make your dream \n come true"
      )}
      subTitle={langToggle("Контакти", "Контакты", "Contacts")}
    />
  );
};

// ContactsMain.propTypes = {
//   title = PropTypes.string,
//   subtitle = PropTypes.string
// };

export default ContactsMain;
