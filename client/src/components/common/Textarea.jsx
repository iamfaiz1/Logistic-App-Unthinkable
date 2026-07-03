import { cn } from '../../utils/cn'

export default function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={cn(
        'min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100',
        className,
      )}
      {...props}
    />
  )
}
