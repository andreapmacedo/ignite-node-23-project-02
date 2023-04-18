import fastify from 'fastify'
// import { knex } from './database'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

// app.get('/hello', () => {
//   return 'Hello World'
// })

// app.get('/hello', async () => {
//   const transactions = await knex('transactions')
//     .where('amount', 1000)
//     .select('*')

//   return transactions
// })

// app.register(transactionsRoutes)
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
