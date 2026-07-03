import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import ErrorState from '../../components/common/ErrorState'
import PageHeader from '../../components/common/PageHeader'
import FormInput from '../../components/forms/FormInput'
import TrackingTimeline from '../../components/tracking/TrackingTimeline'
import { trackingService } from '../../services/tracking.service'

const schema = z.object({ orderId: z.string().min(1, 'Order ID is required') })

export default function TrackingPage() {
  const [events, setEvents] = useState([])
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async ({ orderId }) => {
    setError('')
    try {
      const response = await trackingService.get(orderId)
      setEvents(response.events || response.tracking || response.data || [])
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <PageHeader eyebrow="Tracking" title="Delivery timeline" description="Inspect status changes, actor notes, and timestamps for any order." />
      <Card>
        <form className="flex flex-col gap-3 sm:flex-row sm:items-end" onSubmit={handleSubmit(onSubmit)}>
          <FormInput label="Order ID" registration={register('orderId')} error={errors.orderId} />
          <Button type="submit" isLoading={isSubmitting}>Load timeline</Button>
        </form>
      </Card>
      {error && <ErrorState message={error} />}
      <TrackingTimeline events={events} />
    </>
  )
}
