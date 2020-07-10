import { Models } from '@rematch/core'
import { products } from './models/products/model'
import { loader } from './models/loader/model'

export interface RootModel extends Models {
  products: typeof products
  loader: typeof loader
}

export const models: RootModel = {
  products,
  loader,
}
