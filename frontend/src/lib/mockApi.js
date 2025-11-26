import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/items' });

// add method directly
api.getItems = () => api.get('/');

export default api;
