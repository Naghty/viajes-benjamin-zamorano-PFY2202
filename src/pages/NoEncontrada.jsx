import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section className="text-center py-16">
      <h1 className="text-2xl font-bold mb-2">Pagina no encontrada</h1>
      <Link to="/" className="text-sky-700 hover:underline">
        Volver al inicio
      </Link>
    </section>
  )
}
