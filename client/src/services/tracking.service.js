import api from '../api/axios'

export const trackingService = {
  get: (orderId) => api.get(`/tracking/${orderId}`),
  updateStatus: (orderId, payload) => api.patch(`/tracking/${orderId}/status`, payload),
}
