import { LayoutDashboard, Map, Package, Route, Settings, ShieldCheck, Truck, Users } from 'lucide-react'
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
    <aside className={cn('min-h-screen w-72 shrink-0 border-r border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5', className)}>
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-600 text-white">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="font-black text-slate-950">Unstopable</p>
          <p className="text-xs text-slate-500">Logistics Control</p>
        </div>
      </div>
      <nav className="grid gap-1">
        {(navByRole[role] || []).map(([label, href, Icon]) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700',
                isActive && 'bg-blue-50 text-blue-700 ring-1 ring-blue-100',
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
