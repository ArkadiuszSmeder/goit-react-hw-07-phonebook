import React, { useState } from "react";
import { ContactData, ContactInput, ContactSubmit, ContactLabel } from "../styled/styled-contactForm"
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactsSlice";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const duplicate = contacts.find(contact => 
      contact.name === formData.name || contact.number === formData.number
    );
    if (duplicate) {
      alert('Contact already exists');
      return;
    }
    dispatch(addContact(formData.name, formData.number));
    setFormData({ name: "", number: "" });
  }

  return (
    <ContactData onSubmit={handleSubmit}>
      <ContactLabel htmlFor="name">Name</ContactLabel>
      <ContactInput
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <ContactLabel htmlFor="number">Number</ContactLabel>
      <ContactInput
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        type="tel"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ContactSubmit type="submit">Add contact</ContactSubmit>
    </ContactData>
  );
};