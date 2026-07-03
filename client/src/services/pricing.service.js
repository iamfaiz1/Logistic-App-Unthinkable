import api from '../api/axios'

export const pricingService = {
  calculate: (payload) => api.post('/pricing/calculate', payload),
}
