import axios from "axios";

// Obtener todos los recursos
export const getAllResources = async () => {
  const response = await axios.get('/api/resources');
  return response.data;
};

// Obtener un recurso por ID
export const getResourceById = async (id) => {
  const response = await axios.get(`/api/resources/${id}`);
  return response.data;
};

// Crear un recurso
export const createResource = async (resourceData) => {
  const response = await axios.post('/api/resources', resourceData);
  return response.data;
};

// Actualizar un recurso
export const updateResource = async (id, resourceData) => {
  const response = await axios.put(`/api/resources/${id}`, resourceData);
  return response.data;
};

// Eliminar un recurso
export const deleteResource = async (id) => {
  const response = await axios.delete(`/api/resources/${id}`);
  return response.data;
};
