import { Models } from '@rematch/core'
import { products } from './models/products/model'
import { loader } from './models/loader/model'
import { cart } from './models/cart/model'
import { ingredients } from './models/ingredients/model'

export interface RootModel extends Models {
  products: typeof products
  loader: typeof loader
  cart: typeof cart
  ingredients: typeof ingredients
}

export const models: RootModel = {
  products,
  loader,
  cart,
  ingredients,
}
