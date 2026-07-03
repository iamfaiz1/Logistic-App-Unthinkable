import { z } from 'zod'
import ResourceManager from '../../components/common/ResourceManager'
import { useAreaStore } from '../../store/areaStore'

const columns = [
  { accessorKey: 'name', header: 'Area' },
  { accessorKey: 'zone.name', header: 'Zone', cell: ({ row }) => row.original.zone?.name || row.original.zoneId || '-' },
]

const schema = z.object({ name: z.string().min(2), zoneId: z.string().min(1) })

export default function AreasPage() {
  const store = useAreaStore()
  return (
    <ResourceManager
      eyebrow="Network"
      title="Areas"
      description="Manage local service areas and connect them to zones."
      data={store.areas}
      isLoading={store.isLoading}
      error={store.error}
      columns={columns}
      fields={[{ name: 'name', label: 'Area name' }, { name: 'zoneId', label: 'Zone ID' }]}
      schema={schema}
      fetchData={store.fetchAreas}
      createItem={store.createArea}
    />
  )
}
