import { configureStore } from "@reduxjs/toolkit";
//import { contactsReducer } from './contactsSlice';
import { filtersReducer } from "./filterSlice";

import { persistContactsReducer } from "./contactsSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";


export const store = configureStore({
  reducer: {
    persistContactsReducer,
  //contacts: contactsReducer,
  filter: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);