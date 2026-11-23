export const destinos = [
  {
    id: '1',
    paginaWikipedia: 'Christ_the_Redeemer_(statue)',
    ciudad: 'Rio de Janeiro',
    pais: 'Brasil',
    descripcion: 'Playas famosas, cerros con vistas increibles y mucha vida nocturna.',
    actividades: ['Cristo Redentor', 'Playa de Copacabana', 'Pan de Azucar', 'Escuela de samba'],
  },
  {
    id: '2',
    paginaWikipedia: 'Machu_Picchu',
    ciudad: 'Cusco',
    pais: 'Peru',
    descripcion: 'Antigua capital del imperio inca y puerta de entrada a Machu Picchu.',
    actividades: ['Machu Picchu', 'Valle Sagrado', 'Montana de colores', 'Plaza de Armas'],
  },
  {
    id: '3',
    paginaWikipedia: 'Obelisco_de_Buenos_Aires',
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    descripcion: 'Ciudad cultural con tango, teatros, parrillas y barrios llenos de historia.',
    actividades: ['Show de tango', 'Barrio de La Boca', 'Recoleta', 'Parrilla en Palermo'],
  },
  {
    id: '4',
    paginaWikipedia: 'Canc%C3%BAn',
    ciudad: 'Cancun',
    pais: 'Mexico',
    descripcion: 'Aguas turquesas, resorts y ruinas mayas a pocos kilometros.',
    actividades: ['Chichen Itza', 'Snorkel en Isla Mujeres', 'Cenotes', 'Playa Delfines'],
  },
  {
    id: '5',
    paginaWikipedia: 'Royal_Palace_of_Madrid',
    ciudad: 'Madrid',
    pais: 'Espana',
    descripcion: 'Museos de primer nivel, tapas y parques para recorrer a pie.',
    actividades: ['Museo del Prado', 'Parque del Retiro', 'Palacio Real', 'Ruta de tapas'],
  },
  {
    id: '6',
    paginaWikipedia: 'Paris',
    ciudad: 'Paris',
    pais: 'Francia',
    descripcion: 'La ciudad del arte, la moda y la gastronomia a orillas del Sena.',
    actividades: ['Torre Eiffel', 'Museo del Louvre', 'Crucero por el Sena', 'Montmartre'],
  },
  {
    id: '7',
    paginaWikipedia: 'Colosseum',
    ciudad: 'Roma',
    pais: 'Italia',
    descripcion: 'Historia en cada esquina, desde el Imperio Romano hasta el Vaticano.',
    actividades: ['Coliseo', 'Fontana de Trevi', 'Vaticano', 'Pasta en Trastevere'],
  },
  {
    id: '8',
    paginaWikipedia: 'Statue_of_Liberty',
    ciudad: 'Nueva York',
    pais: 'Estados Unidos',
    descripcion: 'La ciudad que nunca duerme, con rascacielos, teatro y gastronomia de todo el mundo.',
    actividades: ['Central Park', 'Estatua de la Libertad', 'Times Square', 'Broadway'],
  },
]

const aerolineas = ['LATAM', 'Sky Airline', 'Iberia', 'Air France', 'American Airlines', 'Avianca']
const nombresHotel = ['Hotel Central', 'Gran Plaza', 'Casa del Sol', 'Residencia Mirador', 'Hotel Boutique Centro']

const precioBase = { 1: 420000, 2: 310000, 3: 260000, 4: 520000, 5: 780000, 6: 850000, 7: 830000, 8: 690000 }
const precioNoche = { 1: 55000, 2: 40000, 3: 45000, 4: 70000, 5: 85000, 6: 110000, 7: 95000, 8: 130000 }

export const vuelos = destinos.flatMap((d, i) =>
  [0, 1, 2].map((n) => ({
    id: `V${d.id}-${n + 1}`,
    destinoId: d.id,
    aerolinea: aerolineas[(i + n) % aerolineas.length],
    origen: 'Santiago (SCL)',
    fechaSalida: `2027-0${n + 2}-1${n + 2}`,
    fechaRegreso: `2027-0${n + 2}-2${n + 2}`,
    precio: precioBase[d.id] + n * 35000,
    disponibilidad: d.id === '8' && n === 2 ? 0 : 4 + n * 3,
  }))
)

export const hoteles = destinos.flatMap((d, i) =>
  [0, 1, 2].map((n) => ({
    id: `H${d.id}-${n + 1}`,
    destinoId: d.id,
    nombre: `${nombresHotel[(i + n) % nombresHotel.length]} ${d.ciudad}`,
    estrellas: 3 + n,
    precioPorNoche: precioNoche[d.id] + n * 25000,
    fechaDesde: `2027-0${n + 2}-1${n + 2}`,
    fechaHasta: `2027-0${n + 2}-2${n + 2}`,
    disponibilidad: d.id === '3' && n === 0 ? 0 : 2 + n * 4,
  }))
)
