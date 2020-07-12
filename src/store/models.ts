import { Models } from '@rematch/core'
import { products } from './models/products/model'
import { loader } from './models/loader/model'
import { cart } from './models/cart/model'
import { ingredients } from './models/ingredients/model'
import { settings } from './models/settings/model'

export interface RootModel extends Models {
  products: typeof products
  loader: typeof loader
  cart: typeof cart
  ingredients: typeof ingredients
  settings: typeof settings
}

export const models: RootModel = {
  products,
  loader,
  cart,
  ingredients,
  settings,
}
