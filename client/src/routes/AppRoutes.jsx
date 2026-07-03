import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import AgentLayout from '../layouts/AgentLayout'
import AuthLayout from '../layouts/AuthLayout'
import CustomerLayout from '../layouts/CustomerLayout'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AgentsPage from '../pages/admin/AgentsPage'
import AreasPage from '../pages/admin/AreasPage'
import OrdersPage from '../pages/admin/OrdersPage'
import RateCardsPage from '../pages/admin/RateCardsPage'
import TrackingPage from '../pages/admin/TrackingPage'
import ZonesPage from '../pages/admin/ZonesPage'
import AgentDashboardPage from '../pages/agent/AgentDashboardPage'
import AssignedOrdersPage from '../pages/agent/AssignedOrdersPage'
import LocationUpdatePage from '../pages/agent/LocationUpdatePage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import LandingPage from '../pages/shared/LandingPage'
import CreateOrderPage from '../pages/customer/CreateOrderPage'
import CustomerDashboardPage from '../pages/customer/CustomerDashboardPage'
import CustomerOrdersPage from '../pages/customer/CustomerOrdersPage'
import CustomerTrackingPage from '../pages/customer/CustomerTrackingPage'
import NotFoundPage from '../pages/shared/NotFoundPage'
import UnauthorizedPage from '../pages/shared/UnauthorizedPage'
import { ROLES } from '../constants/roles'
import { useAuthStore } from '../store/authStore'
import ProtectedRoute from './ProtectedRoute'
import RoleProtectedRoute from './RoleProtectedRoute'

export default function AppRoutes() {
  const { restoreSession, logout } = useAuthStore()

  useEffect(() => {
    restoreSession()
    window.addEventListener('auth:logout', logout)
    return () => window.removeEventListener('auth:logout', logout)
  }, [logout, restoreSession])

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="zones" element={<ZonesPage />} />
              <Route path="areas" element={<AreasPage />} />
              <Route path="rate-cards" element={<RateCardsPage />} />
              <Route path="agents" element={<AgentsPage />} />
              <Route path="tracking" element={<TrackingPage />} />
            </Route>
          </Route>
          <Route element={<RoleProtectedRoute allowedRoles={[ROLES.CUSTOMER]} />}>
            <Route path="/customer" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboardPage />} />
              <Route path="orders" element={<CustomerOrdersPage />} />
              <Route path="orders/new" element={<CreateOrderPage />} />
              <Route path="tracking" element={<CustomerTrackingPage />} />
            </Route>
          </Route>
          <Route element={<RoleProtectedRoute allowedRoles={[ROLES.AGENT]} />}>
            <Route path="/agent" element={<AgentLayout />}>
              <Route index element={<AgentDashboardPage />} />
              <Route path="orders" element={<AssignedOrdersPage />} />
              <Route path="location" element={<LocationUpdatePage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
