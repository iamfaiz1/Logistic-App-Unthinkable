import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f8fbff] px-4 py-10">
      <section className="w-full max-w-md rounded-lg border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10">
        <Outlet />
      </section>
    </main>
  )
}
