import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4 py-10 dark:bg-slate-950">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <Outlet />
      </section>
    </main>
  )
}
