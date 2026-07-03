import api from '../api/axios'

export const areaService = {
  list: (params) => api.get('/areas', { params }),
  create: (payload) => api.post('/areas', payload),
  update: (id, payload) => api.patch(`/areas/${id}`, payload),
  remove: (id) => api.delete(`/areas/${id}`),
}
