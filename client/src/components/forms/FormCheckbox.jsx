export default function FormCheckbox({ label, registration, ...props }) {
  return (
    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      <input className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600" type="checkbox" {...registration} {...props} />
      {label}
    </label>
  )
}
