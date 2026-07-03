import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const parts = useLocation().pathname.split('/').filter(Boolean)

  return (
    <nav className="hidden text-sm text-slate-500 dark:text-slate-400 md:flex">
      <Link className="hover:text-teal-700" to="/">Home</Link>
      {parts.map((part, index) => (
        <span className="flex items-center" key={part}>
          <span className="px-2">/</span>
          <Link className="capitalize hover:text-teal-700" to={`/${parts.slice(0, index + 1).join('/')}`}>
            {part.replace('-', ' ')}
          </Link>
        </span>
      ))}
    </nav>
  )
}
