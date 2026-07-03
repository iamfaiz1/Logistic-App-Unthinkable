import { LogOut, UserCircle } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import Button from '../common/Button'

export default function UserMenu() {
  const { user, logout } = useAuthStore()

  return (
    <div className="flex items-center gap-2">
      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name || 'User'}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{user?.role || 'ROLE'}</p>
      </div>
      <UserCircle className="h-8 w-8 text-slate-400" />
      <Button type="button" variant="ghost" className="px-3" onClick={logout} aria-label="Logout">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
