import { configureStore } from "@reduxjs/toolkit";
//import { contactsReducer } from './contactsSlice';
import { filtersReducer } from "./filterSlice";

import { persistContactsReducer } from "./contactsSlice";

import { persistStore } from "redux-persist";


export const store = configureStore({
  reducer: {
    persistContactsReducer,
  //contacts: contactsReducer,
  filter: filtersReducer,
},
});

export const persistor = persistStore(store);