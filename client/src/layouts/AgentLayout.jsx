import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'

export default function AgentLayout() {
  return (
    <div className="min-h-screen bg-[#f8fbff] lg:flex">
      <Sidebar role="AGENT" className="hidden lg:block" />
      <div className="min-w-0 flex-1">
        <Topbar role="AGENT" />
        <div className="mx-auto grid max-w-7xl gap-6 p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
