import Input from '../common/Input'

export default function FormInput({ label, error, registration, ...props }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <Input {...registration} {...props} />
      {error && <span className="text-xs text-rose-600">{error.message}</span>}
    </label>
  )
}
