export const formatoPrecio = (valor) => `$${valor.toLocaleString('es-CL')}`

export const formatoFecha = (texto) =>
  new Date(`${texto}T00:00:00`).toLocaleDateString('es-CL', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
