import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../common/Card'
import EmptyState from '../common/EmptyState'

export default function AgentChart({ data = [] }) {
  return (
    <Card>
      <h2 className="text-base font-bold text-slate-950">Agent utilization</h2>
      <div className="mt-4 h-64">
        {data.length ? (
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <EmptyState title="No agent data" description="Utilization appears after assignments are created." />
        )}
      </div>
    </Card>
  )
}
