import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApi from '../hooks/useApi.js'
import { obtenerDestino } from '../services/restApi.js'
import { obtenerOfertas } from '../services/graphqlApi.js'
import { formatoFecha, formatoPrecio } from '../utils/formato.js'
import ImagenDestino from '../components/ImagenDestino.jsx'
import TarjetaOferta from '../components/TarjetaOferta.jsx'
import ResumenViaje from '../components/ResumenViaje.jsx'
import Cargando from '../components/Cargando.jsx'
import MensajeError from '../components/MensajeError.jsx'

export default function DetalleDestino() {
  const { id } = useParams()
  const destino = useApi(() => obtenerDestino(id), [id])
  const ofertas = useApi(() => obtenerOfertas(id), [id])

  const [vueloId, setVueloId] = useState(null)
  const [hotelId, setHotelId] = useState(null)
  const [noches, setNoches] = useState(7)

  useEffect(() => {
    setVueloId(null)
    setHotelId(null)
    setNoches(7)
  }, [id])

  if (destino.cargando) return <Cargando texto="Cargando destino..." />
  if (destino.error) {
    return (
      <div className="space-y-4">
        <MensajeError mensaje={destino.error} />
        <Link to="/destinos" className="text-sky-700 hover:underline">
          Volver a destinos
        </Link>
      </div>
    )
  }

  const d = destino.data
  const vuelos = ofertas.data?.vuelos ?? []
  const hoteles = ofertas.data?.hoteles ?? []
  const vueloElegido = vuelos.find((v) => v.id === vueloId)
  const hotelElegido = hoteles.find((h) => h.id === hotelId)

  return (
    <section>
      <Link to="/destinos" className="text-sm text-sky-700 hover:underline">
        Volver a destinos
      </Link>

      <div className="bg-white rounded-lg shadow overflow-hidden mt-2 mb-6">
        <ImagenDestino destino={d} className="h-48 sm:h-64 w-full" />
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            {d.ciudad}, {d.pais}
          </h1>
          <p className="text-slate-600 mt-1 mb-4">{d.descripcion}</p>
          <h2 className="font-semibold mb-2">Actividades populares</h2>
          <ul className="flex flex-wrap gap-2">
            {d.actividades.map((a) => (
              <li key={a} className="text-sm bg-sky-50 text-sky-800 rounded-full px-3 py-1">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {ofertas.cargando && <Cargando texto="Consultando vuelos y hoteles..." />}
      {ofertas.error && <MensajeError mensaje={ofertas.error} />}

      {!ofertas.cargando && !ofertas.error && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Vuelos</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {vuelos.map((v) => (
                  <TarjetaOferta
                    key={v.id}
                    titulo={v.aerolinea}
                    subtitulo={`Desde ${v.origen}`}
                    detalles={[
                      { etiqueta: 'Salida', valor: formatoFecha(v.fechaSalida) },
                      { etiqueta: 'Regreso', valor: formatoFecha(v.fechaRegreso) },
                    ]}
                    precio={formatoPrecio(v.precio)}
                    disponibilidad={v.disponibilidad}
                    seleccionada={v.id === vueloId}
                    onSeleccionar={() => setVueloId(v.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Hoteles</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {hoteles.map((h) => (
                  <TarjetaOferta
                    key={h.id}
                    titulo={h.nombre}
                    subtitulo={`${h.estrellas} estrellas`}
                    detalles={[
                      { etiqueta: 'Desde', valor: formatoFecha(h.fechaDesde) },
                      { etiqueta: 'Hasta', valor: formatoFecha(h.fechaHasta) },
                    ]}
                    precio={`${formatoPrecio(h.precioPorNoche)} / noche`}
                    disponibilidad={h.disponibilidad}
                    seleccionada={h.id === hotelId}
                    onSeleccionar={() => setHotelId(h.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <ResumenViaje
            destino={d}
            vuelo={vueloElegido}
            hotel={hotelElegido}
            noches={noches}
            onCambiarNoches={setNoches}
          />
        </div>
      )}
    </section>
  )
}
