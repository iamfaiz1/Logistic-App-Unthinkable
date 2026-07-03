import { ArrowRight, BarChart3, Boxes, CheckCircle2, MapPinned, PackageCheck, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

const metrics = [
  ['6', 'tracked order states'],
  ['3', 'operating roles'],
  ['2', 'zone pricing modes'],
]

const capabilities = [
  ['Zone-aware pricing', 'Rate cards combine B2B/B2C rules, INTRA/INTER zones, weight, and COD surcharge.', BarChart3],
  ['Delivery operations', 'Orders move through pickup, transit, out-for-delivery, delivered, and failed states.', PackageCheck],
  ['Fleet visibility', 'Agent availability and zone-linked locations keep dispatch decisions grounded.', MapPinned],
]

const flow = ['Created', 'Picked up', 'In transit', 'Out for delivery', 'Delivered']

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-black leading-tight">Unstopable Logistics</span>
              <span className="block text-xs font-semibold text-slate-500">Delivery control platform</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 sm:inline-flex">
              Sign in
            </Link>
            <Link to="/register" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700">
              Create account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#f8fbff]">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-sm">
              <Truck className="h-4 w-4" />
              Last-mile logistics OS
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Unstopable Logistics
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A clean operating layer for customers, agents, and admins to create orders, calculate charges, assign delivery work, and track every status change from pickup to completion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Open dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/register" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue-100 bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-sm hover:bg-blue-50">
                Register as customer
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map(([value, label]) => (
                <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5" key={label}>
                  <p className="text-2xl font-black text-blue-700">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              alt="Logistics warehouse with delivery operations"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl shadow-blue-950/20"
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-lg border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/15 sm:left-8 sm:right-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-950">Shipment flow</p>
                  <p className="text-xs text-slate-500">Order status timeline</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Live</span>
              </div>
              <div className="grid gap-2">
                {flow.map((item, index) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-blue-50">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${100 - index * 15}%` }} />
                    </div>
                    <span className="w-28 text-right text-xs font-semibold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Built around your schema</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">Operational screens that match the data model</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The interface follows your core entities: users, zones, areas, rate cards, orders, tracking history, delivery attempts, and notifications.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map(([title, description, Icon]) => (
            <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f8fbff]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Control center</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Designed for repeated daily operations</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Admin rate cards and zones', 'Customer order creation', 'Agent status updates', 'Tracking timeline reviews'].map((item) => (
              <div className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm shadow-blue-950/5" key={item}>
                <Boxes className="h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Unstopable Logistics</p>
          <p>Professional delivery management for modern teams.</p>
        </div>
      </footer>
    </main>
  )
}
