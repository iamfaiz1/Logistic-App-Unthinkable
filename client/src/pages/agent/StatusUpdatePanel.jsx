import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import FormInput from '../../components/forms/FormInput'
import FormSelect from '../../components/forms/FormSelect'
import { trackingService } from '../../services/tracking.service'

const schema = z.object({
  orderId: z.string().min(1),
  status: z.enum(['PICKED_UP', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'FAILED']),
})

export default function StatusUpdatePanel() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = async ({ orderId, status }) => {
    await trackingService.updateStatus(orderId, { status })
    toast.success('Status updated')
  }

  return (
    <Card>
      <h2 className="mb-4 text-base font-bold text-slate-950 dark:text-white">Update delivery status</h2>
      <form className="grid gap-4 md:grid-cols-[1fr_1fr_auto]" onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Order ID" registration={register('orderId')} error={errors.orderId} />
        <FormSelect label="Status" registration={register('status')} error={errors.status}>
          <option value="">Select status</option>
          {schema.shape.status.options.map((status) => <option value={status} key={status}>{status}</option>)}
        </FormSelect>
        <Button className="self-end" type="submit" isLoading={isSubmitting}>Update</Button>
      </form>
    </Card>
  )
}
