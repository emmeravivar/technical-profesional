// Archivo: resourcesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllResources, fetchResourceById, createNewResource, updateExistingResource, deleteExistingResource } from './resourcesThunks';

const resourcesSlice = createSlice({
  name: 'resources',
  initialState: {
    list: [], // Lista de recursos
    current: null, // Recurso seleccionado
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllResources.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllResources.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAllResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchResourceById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(createNewResource.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateExistingResource.fulfilled, (state, action) => {
        const index = state.list.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteExistingResource.fulfilled, (state, action) => {
        state.list = state.list.filter((r) => r.id !== action.payload);
      });
  },
});

export default resourcesSlice.reducer;