import { useEffect } from 'react'
import Badge from '../../components/common/Badge'
import ErrorState from '../../components/common/ErrorState'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/tables/DataTable'
import { useAgentStore } from '../../store/agentStore'

const columns = [
  { accessorKey: 'name', header: 'Agent' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'isAvailable', header: 'Availability', cell: ({ getValue }) => <Badge tone={getValue() ? 'success' : 'neutral'}>{getValue() ? 'Available' : 'Busy'}</Badge> },
  { accessorKey: 'currentLat', header: 'Latitude' },
  { accessorKey: 'currentLng', header: 'Longitude' },
]

export default function AgentsPage() {
  const { agents, isLoading, error, fetchAgents } = useAgentStore()

  useEffect(() => {
    fetchAgents()
  }, [fetchAgents])

  return (
    <>
      <PageHeader eyebrow="Fleet" title="Agents" description="View active delivery agents, availability, and last known location." />
      {error && <ErrorState message={error} />}
      <DataTable title={isLoading ? 'Loading agents' : 'Agents'} columns={columns} data={agents} />
    </>
  )
}
