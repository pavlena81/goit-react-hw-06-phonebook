import { createSlice } from "@reduxjs/toolkit";

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
      const id = state.findIndex(contact => contact.id === action.payload);

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

export const { addTask, deleteTask, toggleCompleted } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;