import { create } from 'zustand'
import { authService } from '../services/auth.service'
import { DASHBOARD_PATH_BY_ROLE } from '../constants/roles'
import { unwrapUser } from '../utils/normalize'

const savedUser = localStorage.getItem('authUser')

export const useAuthStore = create((set, get) => ({
  user: savedUser ? JSON.parse(savedUser) : null,
  token: localStorage.getItem('accessToken'),
  isLoading: false,
  error: '',
  isAuthenticated: Boolean(localStorage.getItem('accessToken')),
  dashboardPath: () => DASHBOARD_PATH_BY_ROLE[get().user?.role] || '/login',
  login: async (payload) => {
    set({ isLoading: true, error: '' })
    try {
      const response = await authService.login(payload)
      const token = response.token || response.accessToken || response.data?.token
      const user = unwrapUser(response)
      localStorage.setItem('accessToken', token)
      localStorage.setItem('authUser', JSON.stringify(user))
      set({ token, user, isAuthenticated: true, isLoading: false })
      return user
    } catch (error) {
      set({ error: error.message, isLoading: false })
      throw error
    }
  },
  restoreSession: async () => {
    if (!get().token) return
    try {
      const response = await authService.me()
      const user = unwrapUser(response)
      localStorage.setItem('authUser', JSON.stringify(user))
      set({ user, isAuthenticated: true })
    } catch {
      get().logout()
    }
  },
  logout: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('authUser')
    set({ user: null, token: null, isAuthenticated: false })
  },
}))
