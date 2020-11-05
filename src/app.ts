import Server from './server'
require('dotenv').config()

const { PORT } = process.env

const port = Number(PORT) || 4000

const app = new Server().start(port)

export default app
