import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f8fbff] p-6 text-center">
      <section>
        <p className="text-sm font-bold uppercase text-blue-700">404</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Page not found</h1>
        <p className="mt-2 text-slate-500">The route you opened does not exist.</p>
        <Link to="/"><Button className="mt-6" type="button">Go home</Button></Link>
      </section>
    </main>
  )
}
