import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'

export default function UnauthorizedPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-6 text-center dark:bg-slate-950">
      <section>
        <p className="text-sm font-bold uppercase text-teal-700">403</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">You do not have access</h1>
        <p className="mt-2 text-slate-500">Your current role cannot open this workspace.</p>
        <Link to="/login"><Button className="mt-6" type="button">Back to login</Button></Link>
      </section>
    </main>
  )
}
