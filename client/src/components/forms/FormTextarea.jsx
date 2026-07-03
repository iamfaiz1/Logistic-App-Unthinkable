import Textarea from '../common/Textarea'

export default function FormTextarea({ label, error, registration, ...props }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <Textarea {...registration} {...props} />
      {error && <span className="text-xs text-rose-600">{error.message}</span>}
    </label>
  )
}
