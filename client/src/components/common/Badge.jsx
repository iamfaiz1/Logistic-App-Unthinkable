import { cn } from '../../utils/cn'

const tones = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-200',
  danger: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-200',
  info: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-200',
}

export default function Badge({ children, tone = 'neutral', className = '' }) {
  return (
    <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  )
}
