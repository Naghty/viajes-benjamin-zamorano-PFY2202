import { useEffect, useState } from 'react'

export default function useApi(funcion, dependencias) {
  const [data, setData] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let activo = true
    setCargando(true)
    setError(null)
    funcion()
      .then((resultado) => {
        if (activo) setData(resultado)
      })
      .catch((e) => {
        if (activo) setError(e.message)
      })
      .finally(() => {
        if (activo) setCargando(false)
      })
    return () => {
      activo = false
    }
  }, dependencias)

  return { data, cargando, error }
}
