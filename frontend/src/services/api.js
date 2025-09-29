// filepath: d:\Y3_S2\Assignments\CSSE\UrbanClear\frontend\src\services\api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API functions
export const registerUser = async (userData) => {
  return api.post('/auth/register', userData);
};

export const loginUser = async (credentials) => {
  return api.post('/auth/login', credentials);
};

export const getCurrentUser = async () => {
  return api.get('/auth/me');
};