import { cn } from '../../utils/cn'

export default function Select({ className = '', children, ...props }) {
  return (
    <select
      className={cn(
        'min-h-10 w-full rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}
