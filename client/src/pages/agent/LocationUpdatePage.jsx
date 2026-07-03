import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import PageHeader from '../../components/common/PageHeader'
import FormInput from '../../components/forms/FormInput'
import FormSelect from '../../components/forms/FormSelect'
import { useAgentStore } from '../../store/agentStore'
import { useZoneStore } from '../../store/zoneStore'

const schema = z.object({
  zoneId: z.string().min(1),
  latitude: z.number(),
  longitude: z.number(),
})

export default function LocationUpdatePage() {
  const { updateLocation } = useAgentStore()
  const { zones, fetchZones } = useZoneStore()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  useEffect(() => {
    fetchZones()
  }, [fetchZones])

  const onSubmit = async (values) => {
    await updateLocation(values)
    toast.success('Location updated')
  }

  return (
    <>
      <PageHeader eyebrow="Location" title="Update current location" description="Submit your live coordinates for dispatch visibility." />
      <Card>
        <form className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]" onSubmit={handleSubmit(onSubmit)}>
          <FormSelect label="Zone" registration={register('zoneId')} error={errors.zoneId}>
            <option value="">Select zone</option>
            {zones.map((zone) => <option value={zone.id} key={zone.id}>{zone.name}</option>)}
          </FormSelect>
          <FormInput label="Latitude" type="number" step="any" registration={register('latitude', { valueAsNumber: true })} error={errors.latitude} />
          <FormInput label="Longitude" type="number" step="any" registration={register('longitude', { valueAsNumber: true })} error={errors.longitude} />
          <Button className="self-end" type="submit" isLoading={isSubmitting}>Update</Button>
        </form>
      </Card>
    </>
  )
}
