import { Dispatch, IProduct, IRootState } from '../../store'
import { appApi } from '../../../classes/services/ApiService'
import { productByIdSelector } from './selectors'

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
    productLoaded: (state: ProductsState, payload: IProduct) => {
      return { ...state, [payload.id]: payload }
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loadProducts() {
      dispatch.loader.showLoader()
      const productResults = (await appApi.getProducts()).data
      dispatch.loader.hideLoader()
      console.log(productResults)
      dispatch.products.productsLoaded(productResults)
    },
    async loadProductById(id: string, state: IRootState) {
      const product = productByIdSelector(id)(state)
      if (!product) {
        dispatch.loader.showLoader()
        // TODO: api call
        // dispatch.products.productLoaded()
        dispatch.loader.hideLoader()
      }
    },
  }),
}
