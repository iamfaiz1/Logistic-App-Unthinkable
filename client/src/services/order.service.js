import api from '../api/axios'
import { pricingService } from './pricing.service'

export const orderService = {
  list: (params) => api.get('/orders', { params }),
  getAll: (params) => api.get('/orders', { params }),
  get: (id) => api.get(`/orders/${id}`),
  getById: (id) => api.get(`/orders/${id}`),
  create: (payload) => api.post('/orders', payload),
  calculatePrice: (payload) => pricingService.calculate(payload),
  assignAgent: (orderId) => api.post(`/assign-agents/${orderId}`),
  assignAvailableAgent: (orderId) => api.post(`/assign-agents/${orderId}`),
}
