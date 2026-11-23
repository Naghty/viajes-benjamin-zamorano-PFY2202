const base = import.meta.env.BASE_URL

export async function obtenerDestinos() {
  const respuesta = await fetch(`${base}api/destinos`)
  if (!respuesta.ok) throw new Error('No se pudieron cargar los destinos')
  return respuesta.json()
}

export async function obtenerDestino(id) {
  const respuesta = await fetch(`${base}api/destinos/${id}`)
  if (respuesta.status === 404) throw new Error('El destino no existe')
  if (!respuesta.ok) throw new Error('No se pudo cargar el destino')
  return respuesta.json()
}
