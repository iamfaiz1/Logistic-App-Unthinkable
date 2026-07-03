import Badge from '../common/Badge'
import DataTable from '../tables/DataTable'

const columns = [
  { accessorKey: 'trackingNumber', header: 'Tracking' },
  { accessorKey: 'customer.name', header: 'Customer', cell: ({ row }) => row.original.customer?.name || row.original.customerName || '-' },
  { accessorKey: 'businessType', header: 'Business' },
  { accessorKey: 'paymentType', header: 'Payment' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => <Badge tone="info">{getValue() || 'Pending'}</Badge>,
  },
]

export default function RecentOrdersTable({ orders }) {
  return <DataTable title="Recent orders" columns={columns} data={orders} />
}
