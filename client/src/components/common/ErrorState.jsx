import { AlertTriangle } from 'lucide-react'

export default function ErrorState({ message = 'Unable to load this section.' }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
      <p>{message}</p>
    </div>
  )
}
