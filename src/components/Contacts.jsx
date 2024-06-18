import React from "react";
import { DeleteButton, ListElement } from "styled/styled-contacts";
import { deleteContact } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../redux/selectors";

export const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts)

  if (!visibleContacts) {
    return null;
  }

  console.log(visibleContacts)

  const handleDelete = (id) => dispatch(deleteContact(id))

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <ListElement key={contact.id}>
          {contact.name}: {contact.phone}
          <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
        </ListElement>
      ))}
    </ul>
  );
};