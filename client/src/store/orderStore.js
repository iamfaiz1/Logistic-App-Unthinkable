import { create } from 'zustand'
import { orderService } from '../services/order.service'
import { asArray } from '../utils/normalize'

export const useOrderStore = create((set) => ({
  orders: [],
  pricing: null,
  isLoading: false,
  error: '',
  fetchOrders: async (params) => {
    set({ isLoading: true, error: '' })
    try {
      const response = await orderService.list(params)
      set({ orders: asArray(response, ['orders', 'data']), isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },
  calculatePrice: async (payload) => {
    const pricing = await orderService.calculatePrice(payload)
    set({ pricing })
    return pricing
  },
  createOrder: (payload) => orderService.create(payload),
  assignAgent: (orderId, payload) => orderService.assignAgent(orderId, payload),
}))
