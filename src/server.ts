import express from 'express'
import bodyParser from 'body-parser'
import productsRouter from './routers/ProductsRouter'
import errorMiddleware from './middlewares/error'
import pool from './dbconfig/dbconnector'
import cors from 'cors'

class Server {
  private app

  constructor () {
    this.app = express()
    this.config()
    this.routerConfig()
    this.dbConnect()
  }

  private routerConfig () {
    this.app.use('/products', productsRouter)
  }

  private config () {
    const { app } = this

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(errorMiddleware)
    app.use(cors())
  }

  private async dbConnect () {
    try {
      const client = await pool.connect()
      console.log('🗄️  DB test connection successfull')
      client.release()
    } catch (err) {
      console.error(err)
    }

    pool.connect(function (err, client, done) {
      if (err) throw err
      client.release()
    })
  }

  public start (port: number) {
    this.app.listen(port, function () {
      console.log(`💻 listening on port ${port}`)
    })
  }
}

export default Server
