import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import PageHeader from '../../components/common/PageHeader'

export default function CustomerDashboardPage() {
  return (
    <>
      <PageHeader eyebrow="Customer" title="Shipment workspace" description="Create orders, review delivery history, and open live tracking from one place." />
      <section className="grid gap-4 md:grid-cols-3">
        <Card><h2 className="font-bold text-slate-950">Create order</h2><p className="mt-2 text-sm text-slate-500">Price and submit a new delivery.</p><Link to="/customer/orders/new"><Button className="mt-4">New order</Button></Link></Card>
        <Card><h2 className="font-bold text-slate-950">Order history</h2><p className="mt-2 text-sm text-slate-500">Review your existing deliveries.</p><Link to="/customer/orders"><Button className="mt-4" variant="secondary">View orders</Button></Link></Card>
        <Card><h2 className="font-bold text-slate-950">Tracking</h2><p className="mt-2 text-sm text-slate-500">Open a delivery timeline.</p><Link to="/customer/tracking"><Button className="mt-4" variant="secondary">Track</Button></Link></Card>
      </section>
    </>
  )
}
