import PropTypes from "prop-types";
import style from "./ContactItem.module.css";

const ContactItem = ({ contact, onClick }) => {
  return (
    <li className="">
      <p className="">{contact.name}:</p>
      <p>{contact.number}</p>
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
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
