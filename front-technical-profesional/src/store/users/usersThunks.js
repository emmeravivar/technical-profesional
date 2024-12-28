// Archivo: usersThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './../../server/services/usersServices';

// Thunk: Obtener todos los usuarios
export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Obtener un usuario por ID
export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Crear un usuario
export const createNewUser = createAsyncThunk(
  'users/create',
  async (userData, { rejectWithValue }) => {
    try {
      const newUser = await createUser(userData);
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Actualizar un usuario
export const updateExistingUser = createAsyncThunk(
  'users/update',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(id, userData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Eliminar un usuario
export const deleteExistingUser = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteUser(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
