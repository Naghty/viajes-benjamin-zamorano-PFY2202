import { http, HttpResponse, delay } from 'msw'
import { graphql } from 'graphql'
import { destinos } from './data.js'
import { schema, resolvers } from './schema.js'

export const handlers = [
  http.get('*/api/destinos', async () => {
    await delay(500)
    return HttpResponse.json(destinos)
  }),

  http.get('*/api/destinos/:id', async ({ params }) => {
    await delay(300)
    const destino = destinos.find((d) => d.id === params.id)
    if (!destino) {
      return HttpResponse.json({ mensaje: 'Destino no encontrado' }, { status: 404 })
    }
    return HttpResponse.json(destino)
  }),

  http.post('*/graphql', async ({ request }) => {
    await delay(600)
    const { query, variables } = await request.json()
    const resultado = await graphql({
      schema,
      source: query,
      rootValue: resolvers,
      variableValues: variables,
    })
    return HttpResponse.json(resultado)
  }),
]
