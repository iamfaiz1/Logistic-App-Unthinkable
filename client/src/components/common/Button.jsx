import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700',
  secondary: 'bg-white text-slate-800 ring-1 ring-blue-100 hover:bg-blue-50',
  ghost: 'text-slate-600 hover:bg-blue-50 hover:text-blue-700',
  danger: 'bg-rose-600 text-white hover:bg-rose-700',
}

export default function Button({ children, variant = 'primary', className = '', isLoading, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}
