import api from '../api/axios'

export const orderService = {
  list: (params) => api.get('/orders', { params }),
  get: (id) => api.get(`/orders/${id}`),
  create: (payload) => api.post('/orders', payload),
  calculatePrice: (payload) => api.post('/pricing/calculate', payload),
  assignAgent: (orderId, payload) => api.post(`/assign-agents/${orderId}`, payload),
}
