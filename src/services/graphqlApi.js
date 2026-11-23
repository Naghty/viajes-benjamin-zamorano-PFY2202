const base = import.meta.env.BASE_URL

const CONSULTA_OFERTAS = `
  query Ofertas($destinoId: ID!) {
    vuelos(destinoId: $destinoId) {
      id
      aerolinea
      origen
      fechaSalida
      fechaRegreso
      precio
      disponibilidad
    }
    hoteles(destinoId: $destinoId) {
      id
      nombre
      estrellas
      precioPorNoche
      fechaDesde
      fechaHasta
      disponibilidad
    }
  }
`

export async function obtenerOfertas(destinoId) {
  const respuesta = await fetch(`${base}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: CONSULTA_OFERTAS, variables: { destinoId } }),
  })
  if (!respuesta.ok) throw new Error('No se pudo consultar vuelos y hoteles')
  const { data, errors } = await respuesta.json()
  if (errors) throw new Error(errors[0].message)
  return data
}
