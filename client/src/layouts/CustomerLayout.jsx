import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'

export default function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 lg:flex">
      <Sidebar role="CUSTOMER" className="hidden lg:block" />
      <div className="min-w-0 flex-1">
        <Topbar role="CUSTOMER" />
        <div className="mx-auto grid max-w-7xl gap-6 p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
