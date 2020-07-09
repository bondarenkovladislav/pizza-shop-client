import { Models } from '@rematch/core'
import { products } from './models/products/model'

export interface RootModel extends Models {
  products: typeof products
}

export const models: RootModel = {
  products,
}
