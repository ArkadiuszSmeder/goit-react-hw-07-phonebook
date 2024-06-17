import React from "react";
import { ContactData, ContactInput, ContactSubmit, ContactLabel } from "../styled/styled-contactForm"
import { useDispatch } from "react-redux";
import { addContact } from "../redux/operations";
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {

  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    dispatch(addContact({name, phone}));
    form.reset();
  }

  return (
    <ContactData onSubmit={handleSubmit}>
      <ContactLabel htmlFor="name">Name</ContactLabel>
      <ContactInput
        id={nameInputId}
        name="name"
        type="text"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <ContactLabel htmlFor="number">Number</ContactLabel>
      <ContactInput
        id={numberInputId}
        name="phone"
        type="tel"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ContactSubmit type="submit">Add contact</ContactSubmit>
    </ContactData>
  );
};