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
import FormTextarea from '../../components/forms/FormTextarea'
import { useOrderStore } from '../../store/orderStore'
import { useZoneStore } from '../../store/zoneStore'

const schema = z.object({
  pickupAddress: z.string().min(5),
  dropAddress: z.string().min(5),
  pickupZoneId: z.string().min(1),
  dropZoneId: z.string().min(1),
  length: z.number().positive(),
  width: z.number().positive(),
  height: z.number().positive(),
  actualWeight: z.number().positive(),
  businessType: z.enum(['B2B', 'B2C']),
  paymentType: z.enum(['PREPAID', 'COD']),
})

export default function CreateOrderPage() {
  const { zones, fetchZones } = useZoneStore()
  const { pricing, calculatePrice, createOrder } = useOrderStore()
  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  useEffect(() => {
    fetchZones()
  }, [fetchZones])

  const priceOrder = () => calculatePrice(getValues()).then(() => toast.success('Price calculated'))
  const submitOrder = async (values) => {
    await createOrder(values)
    toast.success('Order created')
  }

  return (
    <>
      <PageHeader eyebrow="Orders" title="Create order" description="Calculate volumetric weight and final price before creating a shipment." />
      <Card>
        <form className="grid gap-4" onSubmit={handleSubmit(submitOrder)}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormTextarea label="Pickup address" registration={register('pickupAddress')} error={errors.pickupAddress} />
            <FormTextarea label="Drop address" registration={register('dropAddress')} error={errors.dropAddress} />
            <FormSelect label="Pickup zone" registration={register('pickupZoneId')} error={errors.pickupZoneId}>
              <option value="">Select zone</option>
              {zones.map((zone) => <option value={zone.id} key={zone.id}>{zone.name}</option>)}
            </FormSelect>
            <FormSelect label="Drop zone" registration={register('dropZoneId')} error={errors.dropZoneId}>
              <option value="">Select zone</option>
              {zones.map((zone) => <option value={zone.id} key={zone.id}>{zone.name}</option>)}
            </FormSelect>
            {['length', 'width', 'height', 'actualWeight'].map((name) => (
              <FormInput label={name} type="number" registration={register(name, { valueAsNumber: true })} error={errors[name]} key={name} />
            ))}
            <FormSelect label="Business type" registration={register('businessType')} error={errors.businessType}>
              <option value="">Select</option><option value="B2B">B2B</option><option value="B2C">B2C</option>
            </FormSelect>
            <FormSelect label="Payment type" registration={register('paymentType')} error={errors.paymentType}>
              <option value="">Select</option><option value="PREPAID">PREPAID</option><option value="COD">COD</option>
            </FormSelect>
          </div>
          {pricing && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm font-semibold text-blue-900">
              Final charge: {pricing.finalCharge ?? pricing.data?.finalCharge ?? 'Calculated'}
            </div>
          )}
          <div className="flex flex-wrap justify-end gap-2">
            <Button type="button" variant="secondary" onClick={priceOrder}>Calculate price</Button>
            <Button type="submit" isLoading={isSubmitting}>Create order</Button>
          </div>
        </form>
      </Card>
    </>
  )
}
