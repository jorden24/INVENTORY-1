import axios from 'axios'
import.meta.env.VITE_API_URL

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' })
export default api