import { create } from 'zustand'
import { areaService } from '../services/area.service'
import { asArray } from '../utils/normalize'

export const useAreaStore = create((set) => ({
  areas: [],
  isLoading: false,
  error: '',
  fetchAreas: async (params) => {
    set({ isLoading: true, error: '' })
    try {
      const response = await areaService.list(params)
      set({ areas: asArray(response, ['areas', 'data']), isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
  createArea: (payload) => areaService.create(payload),
  updateArea: (id, payload) => areaService.update(id, payload),
  removeArea: (id) => areaService.remove(id),
}))
