import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
  };
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };

  const isPendingAction = (action) => {
    return action.type.endsWith("/pending");
}

const isRejectAction = (action) => {
    return action.type.endsWith("/rejected")
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
        // .addCase(fetchContacts.pending, handlePending)
        // .addCase(addContact.pending, handlePending)
        // .addCase(deleteContact.pending, handlePending)
        // .addCase(fetchContacts.rejected, handleRejected)
        // .addCase(addContact.rejected, handleRejected)
        // .addCase(deleteContact.rejected, handleRejected)
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            contact => contact.id === action.payload
          );
          state.items.splice(index, 1);
        })
        .addMatcher(isPendingAction, handlePending)
        .addMatcher(isRejectAction, handleRejected)
        .addDefaultCase((state, action) => {state.error = "someone use old function, fix it!"})
    },
});

export const contactsReducer = contactsSlice.reducer