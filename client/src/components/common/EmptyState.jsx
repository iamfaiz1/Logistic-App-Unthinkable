import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'No records found', description = 'New activity will appear here.' }) {
  return (
    <div className="grid place-items-center rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
      <Inbox className="mb-3 h-8 w-8 text-slate-400" />
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  )
}
