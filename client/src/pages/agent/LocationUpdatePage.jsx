import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import PageHeader from '../../components/common/PageHeader'
import FormInput from '../../components/forms/FormInput'
import { useAgentStore } from '../../store/agentStore'

const schema = z.object({
  lat: z.number(),
  lng: z.number(),
})

export default function LocationUpdatePage() {
  const { updateLocation } = useAgentStore()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = async (values) => {
    await updateLocation(values)
    toast.success('Location updated')
  }

  return (
    <>
      <PageHeader eyebrow="Location" title="Update current location" description="Submit your live coordinates for dispatch visibility." />
      <Card>
        <form className="grid gap-4 md:grid-cols-[1fr_1fr_auto]" onSubmit={handleSubmit(onSubmit)}>
          <FormInput label="Latitude" type="number" registration={register('lat', { valueAsNumber: true })} error={errors.lat} />
          <FormInput label="Longitude" type="number" registration={register('lng', { valueAsNumber: true })} error={errors.lng} />
          <Button className="self-end" type="submit" isLoading={isSubmitting}>Update</Button>
        </form>
      </Card>
    </>
  )
}
