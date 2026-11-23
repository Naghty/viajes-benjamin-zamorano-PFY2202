import { useEffect, useState } from 'react'
import { formatoPrecio } from '../utils/formato.js'

export default function ResumenViaje({ destino, vuelo, hotel, noches, onCambiarNoches }) {
  const [comprado, setComprado] = useState(false)

  const totalVuelo = vuelo ? vuelo.precio : 0
  const totalHotel = hotel ? hotel.precioPorNoche * noches : 0
  const total = totalVuelo + totalHotel
  const puedeComprar = Boolean(vuelo && hotel)

  useEffect(() => {
    setComprado(false)
  }, [vuelo?.id, hotel?.id, noches])

  return (
    <aside className="bg-white rounded-lg shadow p-4 lg:sticky lg:top-4 self-start">
      <h2 className="text-lg font-bold mb-3">Resumen de tu viaje</h2>
      <p className="text-sm mb-3">
        Destino: <span className="font-semibold">{destino.ciudad}, {destino.pais}</span>
      </p>

      <div className="text-sm space-y-2 mb-3">
        <p>
          <span className="text-slate-500">Vuelo: </span>
          {vuelo ? `${vuelo.aerolinea} (${formatoPrecio(vuelo.precio)})` : 'Sin seleccionar'}
        </p>
        <p>
          <span className="text-slate-500">Hotel: </span>
          {hotel ? `${hotel.nombre} (${formatoPrecio(hotel.precioPorNoche)} por noche)` : 'Sin seleccionar'}
        </p>
      </div>

      <label htmlFor="noches" className="block text-sm font-medium mb-1">
        Noches de alojamiento
      </label>
      <input
        id="noches"
        type="number"
        min="1"
        max="30"
        value={noches}
        onChange={(e) => onCambiarNoches(Math.min(30, Math.max(1, Number(e.target.value) || 1)))}
        className="w-full rounded-md border border-slate-300 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <p className="text-lg font-bold mb-4">Total: {formatoPrecio(total)}</p>

      <button
        onClick={() => setComprado(true)}
        disabled={!puedeComprar}
        className="w-full rounded-md bg-emerald-600 py-2 font-semibold text-white hover:bg-emerald-700 transition disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
      >
        Comprar
      </button>

      {!puedeComprar && (
        <p className="mt-2 text-xs text-slate-500">Selecciona un vuelo y un hotel para comprar</p>
      )}

      {comprado && (
        <div className="mt-4 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800" role="status">
          Compra confirmada: {destino.ciudad} por {noches} noches. Total pagado: {formatoPrecio(total)}.
        </div>
      )}
    </aside>
  )
}