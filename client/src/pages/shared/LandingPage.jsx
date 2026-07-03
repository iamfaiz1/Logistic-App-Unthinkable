import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white">
      <header className="w-full max-w-4xl p-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Unstopable Logistics</h1>
          <div className="flex gap-4">
            <Link to="/login" className="text-sky-600">Login</Link>
            <Link to="/register" className="text-white bg-sky-600 px-3 py-1 rounded">Register</Link>
          </div>
        </nav>
      </header>

      <main className="w-full max-w-4xl p-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Reliable deliveries, real-time tracking</h2>
        <p className="text-lg text-slate-700 mb-8">Explore our services: realtime tracking, agent assignment, rate cards, and delivery management.</p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-sm text-slate-600">Track shipments with live updates and timelines.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Agent Network</h3>
            <p className="text-sm text-slate-600">Assign and manage delivery agents across zones.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Rate Cards</h3>
            <p className="text-sm text-slate-600">Flexible pricing and rate management for orders.</p>
          </div>
        </section>

        <div className="mt-8">
          <Link to="/register" className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg">Get Started</Link>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Unstopable Logistics</footer>
    </div>
  )
}
