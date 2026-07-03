import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil, Plus, Trash2 } from 'lucide-react'
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
  updateItem,
  removeItem,
}) {
  const [open, setOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const tableColumns = useMemo(() => {
    if (!updateItem && !removeItem) return columns

    return [
      ...columns,
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            {updateItem && (
              <Button
                type="button"
                variant="ghost"
                className="px-2"
                onClick={() => {
                  setEditingItem(row.original)
                  reset(row.original)
                  setOpen(true)
                }}
                aria-label={`Edit ${title}`}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            )}
            {removeItem && (
              <Button
                type="button"
                variant="ghost"
                className="px-2 text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                onClick={async () => {
                  await removeItem(row.original.id)
                  toast.success(`${title} deleted`)
                  fetchData()
                }}
                aria-label={`Delete ${title}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ),
      },
    ]
  }, [columns, fetchData, removeItem, reset, title, updateItem])

  const onSubmit = async (values) => {
    if (editingItem) {
      await updateItem(editingItem.id, values)
      toast.success(`${title} updated`)
    } else {
      await createItem(values)
      toast.success(`${title} created`)
    }
    reset()
    setEditingItem(null)
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
          <Button
            type="button"
            onClick={() => {
              setEditingItem(null)
              reset({})
              setOpen(true)
            }}
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        }
      />
      {error && <ErrorState message={error} />}
      {isLoading ? (
        <div className="rounded-lg border border-blue-100 bg-white p-6 text-sm text-slate-500 shadow-sm shadow-blue-950/5">
          Loading {title.toLowerCase()}...
        </div>
      ) : (
        <DataTable title={title} columns={tableColumns} data={data} />
      )}
      <Modal
        isOpen={open}
        title={`${editingItem ? 'Update' : 'Create'} ${title}`}
        onClose={() => {
          setEditingItem(null)
          setOpen(false)
        }}
      >
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
