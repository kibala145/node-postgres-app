import { Request, Response } from 'express'
import pool from '../dbconfig/dbconnector'
import { Product } from '../models/products'
import { RequestTyped } from '../models/shared'

class ProductsController {
  public async get (req: Request, res: Response) {
    try {
      const client = await pool.connect()

      const sql = 'SELECT * FROM products'
      const { rows } = await client.query(sql)
      const todos = rows

      client.release()

      res.send(todos)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  public async post (req: RequestTyped<Product>, res: Response) {
    try {
      const { name, price } = req.body
      const client = await pool.connect()
      const text = 'INSERT INTO products (name, price) VALUES($1, $2)'
      const values = [name, price]
      const query = {
        text,
        values
      }
      await client.query(query)

      client.release()

      res.sendStatus(200)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default ProductsController
