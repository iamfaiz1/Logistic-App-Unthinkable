import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import PageHeader from '../../components/common/PageHeader'

export default function AgentDashboardPage() {
  return (
    <>
      <PageHeader eyebrow="Agent" title="Delivery queue" description="Review assigned work, update delivery status, and keep your current location fresh." />
      <section className="grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-bold dark:text-white">Assigned orders</h2><p className="mt-2 text-sm text-slate-500">Open active deliveries and update status.</p><Link to="/agent/orders"><Button className="mt-4">View queue</Button></Link></Card>
        <Card><h2 className="font-bold dark:text-white">Location update</h2><p className="mt-2 text-sm text-slate-500">Share your latest latitude and longitude.</p><Link to="/agent/location"><Button className="mt-4" variant="secondary">Update location</Button></Link></Card>
      </section>
    </>
  )
}
