import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from '../common/Card'
import EmptyState from '../common/EmptyState'

const colors = ['#0f766e', '#2563eb', '#d97706', '#dc2626']

export default function DeliveryChart({ data = [] }) {
  return (
    <Card>
      <h2 className="text-base font-bold text-slate-950 dark:text-white">Delivery status</h2>
      <div className="mt-4 h-64">
        {data.length ? (
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={4}>
                {data.map((entry, index) => <Cell fill={colors[index % colors.length]} key={entry.name} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <EmptyState title="No delivery breakdown" description="Status totals will appear after orders are available." />
        )}
      </div>
    </Card>
  )
}
