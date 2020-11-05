import { Pool } from 'pg'

const pool = new Pool({
  max: 20,
  // connectionString: 'postgres://root:newPassword@localhost:port/dbname',
  connectionString: 'postgres://postgres:crwjK3Zw@localhost:5432/postgres',
  idleTimeoutMillis: 30000
})

export default pool
