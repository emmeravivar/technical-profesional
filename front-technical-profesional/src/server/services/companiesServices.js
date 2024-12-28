import axios from "axios";

// Obtener todas las compañías
export const getAllCompanies = async () => {
  const response = await axios.get('/api/companies');
  return response.data;
};

// Obtener una compañía por ID
export const getCompanyById = async (id) => {
  const response = await axios.get(`/api/companies/${id}`);
  return response.data;
};

// Crear una nueva compañía
export const createCompany = async (companyData) => {
  const response = await axios.post('/api/companies', companyData);
  return response.data;
};

// Actualizar una compañía existente
export const updateCompany = async (id, companyData) => {
  const response = await axios.put(`/api/companies/${id}`, companyData);
  return response.data;
};

// Eliminar una compañía
export const deleteCompany = async (id) => {
  const response = await axios.delete(`/api/companies/${id}`);
  return response.data;
};
