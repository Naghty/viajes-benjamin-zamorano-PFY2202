import { useMemo, useState } from 'react'
import useApi from '../hooks/useApi.js'
import { obtenerDestinos } from '../services/restApi.js'
import TarjetaDestino from '../components/TarjetaDestino.jsx'
import Cargando from '../components/Cargando.jsx'
import MensajeError from '../components/MensajeError.jsx'

export default function Destinos() {
  const { data: destinos, cargando, error } = useApi(obtenerDestinos, [])
  const [busqueda, setBusqueda] = useState('')

  const filtrados = useMemo(() => {
    if (!destinos) return []
    const texto = busqueda.trim().toLowerCase()
    return destinos.filter(
      (d) => d.ciudad.toLowerCase().includes(texto) || d.pais.toLowerCase().includes(texto)
    )
  }, [destinos, busqueda])

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Destinos disponibles</h1>
        <div>
          <label htmlFor="busqueda" className="block text-sm font-medium mb-1">
            Buscar por ciudad o pais
          </label>
          <input
            id="busqueda"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full sm:w-64 rounded-md border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      {cargando && <Cargando texto="Cargando destinos..." />}
      {error && <MensajeError mensaje={error} />}
      {!cargando && !error && filtrados.length === 0 && (
        <p className="text-center text-slate-500 py-10">No se encontraron destinos</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((d) => (
          <TarjetaDestino key={d.id} destino={d} />
        ))}
      </div>
    </section>
  )
}
