import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { mainRouter } from './routes/mainRouter';
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(logger())

app.use(cors({
  origin: "*",
  credentials: true
}))

const adapter = new PrismaMariaDb({
  host: Bun.env.DB_HOST,
  port: Bun.env.DB_PORT,
  user: Bun.env.DB_USER,
  password: Bun.env.DB_PASSWORD,
  database: Bun.env.DB_NAME,
  allowPublicKeyRetrieval: true
});

export const prisma = new PrismaClient({ adapter });

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("", mainRouter)

export default {
  fetch: app.fetch,
  port: 8000
}