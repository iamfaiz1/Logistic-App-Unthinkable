import { LayoutDashboard, Map, Package, Route, Settings, Truck, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

const navByRole = {
  ADMIN: [
    ['Dashboard', '/admin', LayoutDashboard],
    ['Orders', '/admin/orders', Package],
    ['Zones', '/admin/zones', Map],
    ['Areas', '/admin/areas', Route],
    ['Rate Cards', '/admin/rate-cards', Settings],
    ['Agents', '/admin/agents', Users],
    ['Tracking', '/admin/tracking', Truck],
  ],
  CUSTOMER: [
    ['Dashboard', '/customer', LayoutDashboard],
    ['Orders', '/customer/orders', Package],
    ['New Order', '/customer/orders/new', Truck],
    ['Tracking', '/customer/tracking', Route],
  ],
  AGENT: [
    ['Dashboard', '/agent', LayoutDashboard],
    ['Assigned Orders', '/agent/orders', Package],
    ['Location', '/agent/location', Map],
  ],
}

export default function Sidebar({ role, className = '' }) {
  return (
    <aside className={cn('min-h-screen w-72 shrink-0 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950', className)}>
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-700 text-sm font-black text-white">UL</span>
        <div>
          <p className="font-black text-slate-950 dark:text-white">Unstopable</p>
          <p className="text-xs text-slate-500">Logistics OS</p>
        </div>
      </div>
      <nav className="grid gap-1">
        {(navByRole[role] || []).map(([label, href, Icon]) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900',
                isActive && 'bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200',
              )
            }
            end={href.split('/').length <= 2}
            key={href}
            to={href}
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
