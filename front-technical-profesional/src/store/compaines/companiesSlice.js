// Archivo: companiesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCompanies, fetchCompanyById, createNewCompany, updateExistingCompany, deleteExistingCompany } from './companiesThunks';

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    list: [], // Lista de compañías
    current: null, // Compañía seleccionada
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAllCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(createNewCompany.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateExistingCompany.fulfilled, (state, action) => {
        const index = state.list.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteExistingCompany.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c.id !== action.payload);
      });
  },
});

export default companiesSlice.reducer;

