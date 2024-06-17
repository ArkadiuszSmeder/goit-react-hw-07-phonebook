import React from "react";
import { DeleteButton, ListElement } from "styled/styled-contacts";
import { deleteContact } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  if (!contacts) {
    return null;
  }

  console.log(contacts)
  // const filter = useSelector((state) => state.contacts.filter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const handleDelete = () => dispatch(deleteContact())

  return (
    <ul>
      {contacts.map((contact) => (
        <ListElement key={contact.id}>
          {contact.name}: {contact.phone}
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ListElement>
      ))}
    </ul>
  );
};