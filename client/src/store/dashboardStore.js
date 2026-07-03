import { create } from 'zustand'
import { dashboardService } from '../services/dashboard.service'

export const useDashboardStore = create((set) => ({
  summary: null,
  isLoading: false,
  error: '',
  fetchSummary: async () => {
    set({ isLoading: true, error: '' })
    try {
      const summary = await dashboardService.getSummary()
      set({ summary, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
}))
