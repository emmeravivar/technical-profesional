// Archivo: usersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers, fetchUserById, createNewUser, updateExistingUser, deleteExistingUser } from './usersThunks';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [], // Lista de usuarios
    current: null, // Usuario seleccionado
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateExistingUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteExistingUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;