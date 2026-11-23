import { formatoPrecio } from '../utils/formato.js'

export default function ResumenViaje({ destino, vuelo, hotel, noches, onCambiarNoches }) {
  const totalVuelo = vuelo ? vuelo.precio : 0
  const totalHotel = hotel ? hotel.precioPorNoche * noches : 0
  const total = totalVuelo + totalHotel

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

      <p className="text-lg font-bold">Total: {formatoPrecio(total)}</p>
    </aside>
  )
}
