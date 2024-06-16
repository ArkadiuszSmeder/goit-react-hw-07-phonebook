import React from "react";
import { ContactForm } from "./components/ContactForm";
import { Filter } from "./components/Filter";
import { Contacts } from "./components/Contacts";
import { AppContainer } from "styled/styled-appContainer";

function App() {

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </AppContainer>
  );
}

export default App;
