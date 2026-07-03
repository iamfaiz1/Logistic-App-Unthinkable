import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'No records found', description = 'New activity will appear here.' }) {
  return (
    <div className="grid place-items-center rounded-lg border border-dashed border-blue-200 p-8 text-center">
      <Inbox className="mb-3 h-8 w-8 text-blue-400" />
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
    </div>
  )
}
