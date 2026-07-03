import api from '../api/axios'

export const rateCardService = {
  list: (params) => api.get('/rate-cards', { params }),
  getAll: (params) => api.get('/rate-cards', { params }),
  create: (payload) => api.post('/rate-cards', payload),
  update: (id, payload) => api.patch(`/rate-cards/${id}`, payload),
  remove: (id) => api.delete(`/rate-cards/${id}`),
  delete: (id) => api.delete(`/rate-cards/${id}`),
}
