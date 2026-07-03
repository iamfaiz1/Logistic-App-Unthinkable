import { create } from 'zustand'
import { rateCardService } from '../services/rateCard.service'
import { asArray } from '../utils/normalize'

export const useRateCardStore = create((set) => ({
  rateCards: [],
  isLoading: false,
  error: '',
  fetchRateCards: async (params) => {
    set({ isLoading: true, error: '' })
    try {
      const response = await rateCardService.list(params)
      set({ rateCards: asArray(response, ['rateCards', 'data']), isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
  createRateCard: (payload) => rateCardService.create(payload),
  updateRateCard: (id, payload) => rateCardService.update(id, payload),
  removeRateCard: (id) => rateCardService.remove(id),
}))
