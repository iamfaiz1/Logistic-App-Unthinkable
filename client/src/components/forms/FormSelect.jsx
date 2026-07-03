import Select from '../common/Select'

export default function FormSelect({ label, error, registration, children, ...props }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <Select {...registration} {...props}>{children}</Select>
      {error && <span className="text-xs text-rose-600">{error.message}</span>}
    </label>
  )
}
