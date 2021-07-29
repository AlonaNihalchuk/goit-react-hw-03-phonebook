import PropTypes from "prop-types";
import style from "./ContactItem.module.css";

const ContactItem = ({ contact, contactName, contactNumber, onClick }) => {
  return (
    <li className="">
      <p className="">{contactName}:</p>
      <p>{contactNumber}</p>
      <button
        className={style.contactsButton}
        onClick={() => onClick(contact.id)}
      >
        delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
