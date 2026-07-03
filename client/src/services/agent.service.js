import api from '../api/axios'

export const agentService = {
  list: () => api.get('/agents'),
  getAll: () => api.get('/agents'),
  available: () => api.get('/agents/available'),
  getAvailable: () => api.get('/agents/available'),
  updateLocation: (payload) => api.post('/agents/location', payload),
}
