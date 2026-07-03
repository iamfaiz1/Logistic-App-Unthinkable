import { z } from 'zod'
import ResourceManager from '../../components/common/ResourceManager'
import { useRateCardStore } from '../../store/rateCardStore'

const columns = [
  { accessorKey: 'businessType', header: 'Business' },
  { accessorKey: 'zoneType', header: 'Zone type' },
  { accessorKey: 'ratePerKg', header: 'Rate / KG' },
  { accessorKey: 'codSurcharge', header: 'COD surcharge' },
]

const schema = z.object({
  businessType: z.enum(['B2B', 'B2C']),
  zoneType: z.enum(['INTRA', 'INTER']),
  ratePerKg: z.number().positive(),
  codSurcharge: z.number().min(0),
})

export default function RateCardsPage() {
  const store = useRateCardStore()
  return (
    <ResourceManager
      eyebrow="Pricing"
      title="Rate Cards"
      description="Configure rate cards by business type, zone type, weight, and COD handling."
      data={store.rateCards}
      isLoading={store.isLoading}
      error={store.error}
      columns={columns}
      fields={[
        { name: 'businessType', label: 'Business type', type: 'select', options: [{ label: 'B2B', value: 'B2B' }, { label: 'B2C', value: 'B2C' }] },
        { name: 'zoneType', label: 'Zone type', type: 'select', options: [{ label: 'INTRA', value: 'INTRA' }, { label: 'INTER', value: 'INTER' }] },
        { name: 'ratePerKg', label: 'Rate per KG', type: 'number', valueAsNumber: true },
        { name: 'codSurcharge', label: 'COD surcharge', type: 'number', valueAsNumber: true },
      ]}
      schema={schema}
      fetchData={store.fetchRateCards}
      createItem={store.createRateCard}
      updateItem={store.updateRateCard}
      removeItem={store.removeRateCard}
    />
  )
}
