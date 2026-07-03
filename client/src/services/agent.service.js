import api from '../api/axios'

export const agentService = {
  list: () => api.get('/agents'),
  available: () => api.get('/agents/available'),
  updateLocation: (payload) => api.post('/agents/location', payload),
}
