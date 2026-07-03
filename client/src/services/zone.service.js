import api from '../api/axios'

export const zoneService = {
  list: (params) => api.get('/zones', { params }),
  create: (payload) => api.post('/zones', payload),
  update: (id, payload) => api.patch(`/zones/${id}`, payload),
  remove: (id) => api.delete(`/zones/${id}`),
}
