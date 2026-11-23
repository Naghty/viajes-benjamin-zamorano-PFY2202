import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="text-center py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Planifica tu proximo viaje</h1>
      <p className="max-w-xl mx-auto text-slate-600 mb-6">
        Explora destinos, revisa los vuelos y hoteles disponibles y arma tu viaje en un solo lugar.
      </p>
      <Link
        to="/destinos"
        className="inline-block rounded-md bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700 transition"
      >
        Ver destinos
      </Link>
    </section>
  )
}
