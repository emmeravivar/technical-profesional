import axios from 'axios';

// Crear un usuario
export const createUser = async (userData) => {
  const response = await axios.post('/api/users', userData);
  return response.data;
};

// Otros métodos
export const getAllUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`/api/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/api/users/${id}`);
  return response.data;
};
