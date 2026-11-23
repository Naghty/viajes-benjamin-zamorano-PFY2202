import { buildSchema } from 'graphql'
import { vuelos, hoteles } from './data.js'

export const schema = buildSchema(`
  type Vuelo {
    id: ID!
    aerolinea: String!
    origen: String!
    fechaSalida: String!
    fechaRegreso: String!
    precio: Int!
    disponibilidad: Int!
  }

  type Hotel {
    id: ID!
    nombre: String!
    estrellas: Int!
    precioPorNoche: Int!
    fechaDesde: String!
    fechaHasta: String!
    disponibilidad: Int!
  }

  type Query {
    vuelos(destinoId: ID!): [Vuelo!]!
    hoteles(destinoId: ID!): [Hotel!]!
  }
`)

export const resolvers = {
  vuelos: ({ destinoId }) => vuelos.filter((v) => v.destinoId === destinoId),
  hoteles: ({ destinoId }) => hoteles.filter((h) => h.destinoId === destinoId),
}
