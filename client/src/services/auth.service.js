import api from '../api/axios'

export const authService = {
  register: (payload) => api.post('/auth/register', payload),
  login: (payload) => api.post('/auth/login', payload),
  me: () => api.get('/auth/me'),
  getCurrentUser: () => api.get('/auth/me'),
}
