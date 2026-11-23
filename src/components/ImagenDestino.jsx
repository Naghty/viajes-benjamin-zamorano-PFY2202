import { useEffect, useState } from 'react'
import { urlImagen } from '../utils/imagenes.js'

const cache = new Map()

function obtenerFuentes(titulo) {
  if (!cache.has(titulo)) {
    const promesa = fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${titulo}`)
      .then((respuesta) => (respuesta.ok ? respuesta.json() : null))
      .then((json) => {
        const miniatura = json?.thumbnail?.source
        if (!miniatura) return []
        return [miniatura.replace(/\/\d+px-/, '/960px-'), miniatura]
      })
      .catch(() => [])
    cache.set(titulo, promesa)
  }
  return cache.get(titulo)
}

export default function ImagenDestino({ destino, className = '' }) {
  const [fuentes, setFuentes] = useState(null)
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    let activo = true
    setFuentes(null)
    setIndice(0)
    obtenerFuentes(destino.paginaWikipedia).then((lista) => {
      if (activo) setFuentes([...lista, urlImagen(destino.id)])
    })
    return () => {
      activo = false
    }
  }, [destino.id, destino.paginaWikipedia])

  return (
    <div className={`bg-slate-200 overflow-hidden ${className}`}>
      {fuentes && (
        <img
          src={fuentes[indice]}
          alt={`Imagen de ${destino.ciudad}`}
          loading="lazy"
          onError={() => setIndice((i) => Math.min(i + 1, fuentes.length - 1))}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}
