import { useEffect } from 'react'
import Badge from '../../components/common/Badge'
import ErrorState from '../../components/common/ErrorState'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/tables/DataTable'
import { useOrderStore } from '../../store/orderStore'

const columns = [
  { accessorKey: 'trackingNumber', header: 'Tracking' },
  { accessorKey: 'businessType', header: 'Business' },
  { accessorKey: 'paymentType', header: 'Payment' },
  { accessorKey: 'chargeableWeight', header: 'Weight' },
  { accessorKey: 'finalPrice', header: 'Price' },
  { accessorKey: 'status', header: 'Status', cell: ({ getValue }) => <Badge tone="info">{getValue() || 'Pending'}</Badge> },
]

export default function OrdersPage() {
  const { orders, isLoading, error, fetchOrders } = useOrderStore()

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <>
      <PageHeader eyebrow="Orders" title="Order management" description="Search and review all delivery orders across customers, agents, and statuses." />
      {error && <ErrorState message={error} />}
      <DataTable title={isLoading ? 'Loading orders' : 'Orders'} columns={columns} data={orders} />
    </>
  )
}
