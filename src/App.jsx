import React, { useEffect} from "react";
import { ContactForm } from "./components/ContactForm";
import { Filter } from "./components/Filter";
import { Contacts } from "./components/Contacts";
import { AppContainer } from "styled/styled-appContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";
import { getError, getIsLoading } from "./redux/selectors";

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <Contacts />
    </AppContainer>
  );
}

export default App;
