import { Dispatch, IProduct } from '../../store'
import { ApiService } from '../../../classes/services/ApiService'

export type ProductsState = { [id: string]: IProduct }

export const products = {
  state: {},
  reducers: {
    productsLoaded: (state: ProductsState, payload: IProduct[]) => {
      return {
        ...state,
        ...payload.reduce((acc, product: IProduct) => {
          return { ...acc, [product.id]: product }
        }, {}),
      }
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loadProducts() {
      const productResults = await ApiService.fetchStock()
      console.log(productResults)
      dispatch.products.productsLoaded(productResults)
    },
  }),
}
