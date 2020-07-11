import { Models } from '@rematch/core'
import { products } from './models/products/model'
import { loader } from './models/loader/model'
import { cart } from './models/cart/model'

export interface RootModel extends Models {
  products: typeof products
  loader: typeof loader
  cart: typeof cart
}

export const models: RootModel = {
  products,
  loader,
  cart,
}
