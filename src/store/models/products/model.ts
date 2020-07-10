import { Dispatch, IProduct } from '../../store'
import { appApi } from '../../../classes/services/ApiService'

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
      dispatch.loader.showLoader()
      const productResults = (await appApi.getProducts()).data
      setTimeout(() => {
        dispatch.loader.hideLoader()
      }, 5000)
      console.log(productResults)
      dispatch.products.productsLoaded(productResults)
    },
  }),
}
