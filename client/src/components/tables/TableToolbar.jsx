import { Search } from 'lucide-react'
import Input from '../common/Input'

export default function TableToolbar({ title, search, onSearchChange, actions }) {
  return (
    <div className="flex flex-col gap-3 border-b border-blue-100 p-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-base font-bold text-slate-950">{title}</h2>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="relative min-w-60">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input className="pl-9" placeholder="Search" value={search} onChange={(event) => onSearchChange(event.target.value)} />
        </label>
        {actions}
      </div>
    </div>
  )
}
