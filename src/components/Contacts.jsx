import React from "react";
import PropTypes from "prop-types";
import { DeleteButton, ListElement } from "styled/styled-contacts";
import { deleteContact } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ListElement key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>Delete</DeleteButton>
        </ListElement>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  }
