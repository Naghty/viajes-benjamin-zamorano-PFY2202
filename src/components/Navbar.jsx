import { NavLink } from 'react-router-dom'

const claseLink = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive ? 'bg-white text-sky-700' : 'text-white hover:bg-sky-600'
  }`

export default function Navbar() {
  return (
    <header className="bg-sky-700 shadow">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-2">
        <span className="text-white font-bold text-lg mr-4">Agencia de Viajes</span>
        <NavLink to="/" end className={claseLink}>
          Inicio
        </NavLink>
        <NavLink to="/destinos" className={claseLink}>
          Destinos
        </NavLink>
      </nav>
    </header>
  )
}
