export default function Loader({ label = 'Loading' }) {
  return (
    <div className="grid gap-3" aria-label={label}>
      <div className="h-8 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
      <div className="h-24 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
      <div className="h-24 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
    </div>
  )
}
