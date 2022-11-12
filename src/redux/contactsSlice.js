import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


 const contactsInitialState = [];

 const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, action) {
      //state.value += 1;
      state.push(action.payload)
    },
    deleteContacts(state, action) {
      const id = state.findIndex(contacts => contacts.id === action.payload);

      //const id = state.state.filter(contact => contact.id !== id);
      state.splice(id, 1)
    },
    findContacts(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.completed = !contact.completed;
          break;
        }
      }
    },
  },
 });

 
const contactsReducer = contactsSlice.reducer;



const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContacts, deleteContacts, toggleCompleted } = contactsSlice.actions;
