// Archivo: index.js para store
import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './compaines/companiesSlice';
import usersReducer from './users/userSlice.js';
import resourcesReducer from './resources/resourcesSlice';

export const store = configureStore({
  reducer: {
    companies: companiesReducer, // Reducer para compañías
    users: usersReducer,         // Reducer para usuarios
    resources: resourcesReducer, // Reducer para recursos
  },
});