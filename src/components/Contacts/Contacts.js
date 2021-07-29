import PropTypes from "prop-types";
import React from "react";
import style from "./Contacts.module.css";
import ContactItem from "./ContactItem/ContactItem";

class Contacts extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <section className={style.contacts}>
        <ul className={style.contactsList}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              contactName={contact.name}
              contactNumber={contact.number}
              onClick={onDelete}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Contacts;
