import Breadcrumbs from './Breadcrumbs'
import MobileSidebar from './MobileSidebar'
import UserMenu from './UserMenu'

export default function Topbar({ role }) {
  return (
    <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-blue-100 bg-white/95 px-4 shadow-sm shadow-blue-950/5 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar role={role} />
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-1">
        <UserMenu />
      </div>
    </header>
  )
}
