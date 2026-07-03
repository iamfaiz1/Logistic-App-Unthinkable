import Breadcrumbs from './Breadcrumbs'
import MobileSidebar from './MobileSidebar'
import ThemeToggle from './ThemeToggle'
import UserMenu from './UserMenu'

export default function Topbar({ role }) {
  return (
    <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 sm:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar role={role} />
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  )
}
