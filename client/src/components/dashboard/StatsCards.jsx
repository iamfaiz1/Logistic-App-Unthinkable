import { PackageCheck, PackageX, Truck, Users } from 'lucide-react'
import Card from '../common/Card'

const config = [
  ['Total Orders', 'totalOrders', PackageCheck],
  ['Delivered Orders', 'deliveredOrders', Truck],
  ['Failed Orders', 'failedOrders', PackageX],
  ['Active Agents', 'activeAgents', Users],
  ['Available Agents', 'availableAgents', Users],
]

export default function StatsCards({ summary }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {config.map(([label, key, Icon]) => (
        <Card className="p-4" key={key}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</span>
            <Icon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
          </div>
          <strong className="mt-4 block text-3xl font-black text-slate-950 dark:text-white">{summary?.[key] ?? 0}</strong>
        </Card>
      ))}
    </section>
  )
}
