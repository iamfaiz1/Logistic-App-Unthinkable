import { z } from 'zod'
import { useEffect } from 'react'
import ResourceManager from '../../components/common/ResourceManager'
import { useAreaStore } from '../../store/areaStore'
import { useZoneStore } from '../../store/zoneStore'

const columns = [
  { accessorKey: 'name', header: 'Area' },
  { accessorKey: 'zone.name', header: 'Zone', cell: ({ row }) => row.original.zone?.name || row.original.zoneId || '-' },
]

const schema = z.object({ name: z.string().min(2), zoneId: z.string().min(1) })

export default function AreasPage() {
  const store = useAreaStore()
  const { zones, fetchZones } = useZoneStore()

  useEffect(() => {
    fetchZones()
  }, [fetchZones])

  return (
    <ResourceManager
      eyebrow="Network"
      title="Areas"
      description="Manage local service areas and connect them to zones."
      data={store.areas}
      isLoading={store.isLoading}
      error={store.error}
      columns={columns}
      fields={[
        { name: 'name', label: 'Area name' },
        { name: 'zoneId', label: 'Zone', type: 'select', options: zones.map((zone) => ({ label: zone.name, value: zone.id })) },
      ]}
      schema={schema}
      fetchData={store.fetchAreas}
      createItem={store.createArea}
      updateItem={store.updateArea}
      removeItem={store.removeArea}
    />
  )
}
