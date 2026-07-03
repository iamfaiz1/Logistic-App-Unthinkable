import { cn } from '../../utils/cn'

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'min-h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-teal-950',
        className,
      )}
      {...props}
    />
  )
}
