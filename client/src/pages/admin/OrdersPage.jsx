import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import ErrorState from '../../components/common/ErrorState'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/tables/DataTable'
import { ROLES } from '../../constants/roles'
import { useAuthStore } from '../../store/authStore'
import { useOrderStore } from '../../store/orderStore'

const columns = [
  { accessorKey: 'trackingNumber', header: 'Tracking' },
  { accessorKey: 'businessType', header: 'Business' },
  { accessorKey: 'paymentType', header: 'Payment' },
  { accessorKey: 'chargeableWeight', header: 'Chargeable weight' },
  { accessorKey: 'finalCharge', header: 'Final charge' },
  { accessorKey: 'status', header: 'Status', cell: ({ getValue }) => <Badge tone="info">{String(getValue() || 'CREATED').replaceAll('_', ' ')}</Badge> },
]

export default function OrdersPage() {
  const { orders, isLoading, error, fetchOrders, assignAgent } = useOrderStore()
  const { user } = useAuthStore()

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const columnsWithActions = user?.role === ROLES.ADMIN
    ? [
        ...columns,
        {
          id: 'actions',
          header: 'Actions',
          cell: ({ row }) => (
            <Button
              type="button"
              variant="secondary"
              disabled={Boolean(row.original.assignedAgentId)}
              onClick={async () => {
                await assignAgent(row.original.id)
                toast.success('Agent assigned')
                fetchOrders()
              }}
            >
              Assign agent
            </Button>
          ),
        },
      ]
    : columns

  return (
    <>
      <PageHeader eyebrow="Orders" title="Order management" description="Search and review all delivery orders across customers, agents, and statuses." />
      {error && <ErrorState message={error} />}
      <DataTable title={isLoading ? 'Loading orders' : 'Orders'} columns={columnsWithActions} data={orders} />
    </>
  )
}
