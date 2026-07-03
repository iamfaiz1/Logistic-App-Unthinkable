import { create } from 'zustand'
import { agentService } from '../services/agent.service'
import { asArray } from '../utils/normalize'

export const useAgentStore = create((set) => ({
  agents: [],
  availableAgents: [],
  isLoading: false,
  error: '',
  fetchAgents: async () => {
    set({ isLoading: true, error: '' })
    try {
      const response = await agentService.list()
      set({ agents: asArray(response, ['agents', 'data']), isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
  fetchAvailableAgents: async () => {
    const response = await agentService.available()
    set({ availableAgents: asArray(response, ['agents', 'availableAgents', 'data']) })
  },
  updateLocation: (payload) => agentService.updateLocation(payload),
}))
