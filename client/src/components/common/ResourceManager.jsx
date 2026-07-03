import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from './Button'
import ErrorState from './ErrorState'
import Modal from './Modal'
import PageHeader from './PageHeader'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import DataTable from '../tables/DataTable'

export default function ResourceManager({
  eyebrow,
  title,
  description,
  data,
  isLoading,
  error,
  columns,
  fields,
  schema,
  fetchData,
  createItem,
}) {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const tableColumns = useMemo(() => columns, [columns])

  const onSubmit = async (values) => {
    await createItem(values)
    toast.success(`${title} created`)
    reset()
    setOpen(false)
    fetchData()
  }

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          <Button type="button" onClick={() => setOpen(true)}>
            <Plus className="h-4 w-4" />
            Add
          </Button>
        }
      />
      {error && <ErrorState message={error} />}
      {isLoading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
          Loading {title.toLowerCase()}...
        </div>
      ) : (
        <DataTable title={title} columns={tableColumns} data={data} />
      )}
      <Modal isOpen={open} title={`Create ${title}`} onClose={() => setOpen(false)}>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) =>
            field.type === 'select' ? (
              <FormSelect label={field.label} registration={register(field.name)} error={errors[field.name]} key={field.name}>
                <option value="">Select {field.label}</option>
                {field.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
              </FormSelect>
            ) : (
              <FormInput label={field.label} type={field.type || 'text'} registration={register(field.name, field.valueAsNumber ? { valueAsNumber: true } : undefined)} error={errors[field.name]} key={field.name} />
            ),
          )}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" isLoading={isSubmitting}>Save</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
