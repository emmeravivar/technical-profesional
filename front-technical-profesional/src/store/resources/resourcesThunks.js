// Archivo: resourcesThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} from './../../server/services/resourcesServices';

// Thunk: Obtener todos los recursos
export const fetchAllResources = createAsyncThunk(
  'resources/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const resources = await getAllResources();
      return resources;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Obtener un recurso por ID
export const fetchResourceById = createAsyncThunk(
  'resources/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const resource = await getResourceById(id);
      return resource;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Crear un recurso
export const createNewResource = createAsyncThunk(
  'resources/create',
  async (resourceData, { rejectWithValue }) => {
    try {
      const newResource = await createResource(resourceData);
      return newResource;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Actualizar un recurso
export const updateExistingResource = createAsyncThunk(
  'resources/update',
  async ({ id, resourceData }, { rejectWithValue }) => {
    try {
      const updatedResource = await updateResource(id, resourceData);
      return updatedResource;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Eliminar un recurso
export const deleteExistingResource = createAsyncThunk(
  'resources/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteResource(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
