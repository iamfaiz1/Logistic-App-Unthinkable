export default function FormCheckbox({ label, registration, ...props }) {
  return (
    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
      <input className="h-4 w-4 rounded border-blue-200 text-blue-600 focus:ring-blue-500" type="checkbox" {...registration} {...props} />
      {label}
    </label>
  )
}
