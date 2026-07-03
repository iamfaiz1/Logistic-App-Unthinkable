import { cn } from '../../utils/cn'

export default function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={cn(
        'min-h-24 w-full rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100',
        className,
      )}
      {...props}
    />
  )
}
