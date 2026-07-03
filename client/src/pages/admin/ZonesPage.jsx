import { z } from 'zod'
import ResourceManager from '../../components/common/ResourceManager'
import { useZoneStore } from '../../store/zoneStore'

const columns = [
  { accessorKey: 'name', header: 'Zone' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'isActive', header: 'Active', cell: ({ getValue }) => (getValue() === false ? 'No' : 'Yes') },
]

const schema = z.object({ name: z.string().min(2), type: z.string().min(2) })

export default function ZonesPage() {
  const store = useZoneStore()
  return (
    <ResourceManager
      eyebrow="Network"
      title="Zones"
      description="Create and search delivery zones used for pricing and routing."
      data={store.zones}
      isLoading={store.isLoading}
      error={store.error}
      columns={columns}
      fields={[{ name: 'name', label: 'Zone name' }, { name: 'type', label: 'Zone type' }]}
      schema={schema}
      fetchData={store.fetchZones}
      createItem={store.createZone}
    />
  )
}
