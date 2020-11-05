interface Prod {
  name: string
  price: number
}

export class Product implements Prod {
  name = ''
  price = 0

  constructor (data: Prod) {
    this.name = data.name
    this.price = data.price
  }
}
