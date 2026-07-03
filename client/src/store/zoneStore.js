import { create } from 'zustand'
import { zoneService } from '../services/zone.service'
import { asArray } from '../utils/normalize'

export const useZoneStore = create((set) => ({
  zones: [],
  isLoading: false,
  error: '',
  fetchZones: async (params) => {
    set({ isLoading: true, error: '' })
    try {
      const response = await zoneService.list(params)
      set({ zones: asArray(response, ['zones', 'data']), isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
  createZone: (payload) => zoneService.create(payload),
  updateZone: (id, payload) => zoneService.update(id, payload),
  removeZone: (id) => zoneService.remove(id),
}))
