// import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL env not found.')
// }

import { env } from './env'

export const config: Knex.Config = {
  // client: 'sqlite',
  // connection: {
  //   filename: env.DATABASE_URL,
  // },
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
