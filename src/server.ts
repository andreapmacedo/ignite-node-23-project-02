import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)

  // const sessionId = request.cookies.sessionId
  // if (!sessionId) {
  //   return reply.status(401).send({
  //     error: 'Unauthorized.',
  //   })
  // }
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    // port: 3333,
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
