import { z } from 'zod'
import ResourceManager from '../../components/common/ResourceManager'
import { useZoneStore } from '../../store/zoneStore'

const columns = [
  { accessorKey: 'name', header: 'Zone' },
  { accessorKey: 'areas', header: 'Areas', cell: ({ row }) => row.original.areas?.length ?? 0 },
]

const schema = z.object({ name: z.string().min(2) })

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
      fields={[{ name: 'name', label: 'Zone name' }]}
      schema={schema}
      fetchData={store.fetchZones}
      createItem={store.createZone}
      updateItem={store.updateZone}
      removeItem={store.removeZone}
    />
  )
}
