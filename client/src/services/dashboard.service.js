import api from '../api/axios'

export const dashboardService = {
  getSummary: () => api.get('/dashboard'),
}
