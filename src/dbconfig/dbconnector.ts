import { Pool } from 'pg'
require('dotenv').config()

const { DATABASE_URL } = process.env

const pool = new Pool({
  max: 20,
  // connectionString: 'postgres://root:newPassword@localhost:port/dbname',
  connectionString: DATABASE_URL,
  idleTimeoutMillis: 30000
})

export default pool
