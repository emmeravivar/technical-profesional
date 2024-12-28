// Archivo: companiesThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} from './../../server/services/companiesServices';

// Thunk: Obtener todas las compañías
export const fetchAllCompanies = createAsyncThunk(
  'companies/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCompanies();
      return response.companies; // Accede al array dentro del objeto
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Obtener una compañía por ID
export const fetchCompanyById = createAsyncThunk(
  'companies/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const company = await getCompanyById(id);
      return company;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Crear una compañía
export const createNewCompany = createAsyncThunk(
  'companies/create',
  async (companyData, { rejectWithValue }) => {
    try {
      const newCompany = await createCompany(companyData);
      return newCompany;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Actualizar una compañía
export const updateExistingCompany = createAsyncThunk(
  'companies/update',
  async ({ id, companyData }, { rejectWithValue }) => {
    try {
      const updatedCompany = await updateCompany(id, companyData);
      return updatedCompany;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk: Eliminar una compañía
export const deleteExistingCompany = createAsyncThunk(
  'companies/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteCompany(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
