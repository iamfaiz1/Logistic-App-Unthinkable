import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from '../common/Card'
import EmptyState from '../common/EmptyState'

const colors = ['#2563eb', '#38bdf8', '#f59e0b', '#ef4444', '#64748b']

export default function DeliveryChart({ data = [] }) {
  return (
    <Card>
      <h2 className="text-base font-bold text-slate-950">Delivery status</h2>
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
