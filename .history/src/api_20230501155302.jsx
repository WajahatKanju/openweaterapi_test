import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/users`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch users');
    });
};

export const getUserById = (id) => {
  return axios.get(`${API_BASE_URL}/users/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error(`Failed to fetch user with id ${id}`);
    });
};

export const createUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users`, userData)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to create user');
    });
};

export const updateUser = (id, userData) => {
  return axios.put(`${API_BASE_URL}/users/${id}`, userData)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error(`Failed to update user with id ${id}`);
    });
};

export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/users/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error(`Failed to delete user with id ${id}`);
    });
};
