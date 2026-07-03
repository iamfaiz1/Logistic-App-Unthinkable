import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../common/Card'
import EmptyState from '../common/EmptyState'

export default function OrderTrendChart({ data = [] }) {
  return (
    <Card>
      <h2 className="text-base font-bold text-slate-950">Order trends</h2>
      <div className="mt-4 h-64">
        {data.length ? (
          <ResponsiveContainer>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="orders" stroke="#2563eb" fill="#dbeafe" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <EmptyState title="No trend data" description="Daily order volume will appear here." />
        )}
      </div>
    </Card>
  )
}
