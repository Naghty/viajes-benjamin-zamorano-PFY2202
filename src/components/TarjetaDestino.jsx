import { Link } from 'react-router-dom'
import ImagenDestino from './ImagenDestino.jsx'

export default function TarjetaDestino({ destino }) {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <div className="relative h-40">
        <ImagenDestino destino={destino} className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{destino.ciudad}</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm font-semibold text-sky-700 mb-2">{destino.pais}</p>
        <p className="text-sm text-slate-600 mb-3">{destino.descripcion}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {destino.actividades.slice(0, 3).map((a) => (
            <li key={a} className="text-xs bg-slate-100 rounded-full px-2 py-1">
              {a}
            </li>
          ))}
        </ul>
        <Link
          to={`/destinos/${destino.id}`}
          className="mt-auto rounded-md bg-sky-600 py-2 text-center font-semibold text-white hover:bg-sky-700 transition"
        >
          Ver vuelos y hoteles
        </Link>
      </div>
    </article>
  )
}
