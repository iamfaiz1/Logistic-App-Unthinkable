export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300">{eyebrow}</p>}
        <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 max-w-3xl text-sm text-slate-500 dark:text-slate-400">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  )
}
