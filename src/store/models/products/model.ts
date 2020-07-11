import { Dispatch, IProduct, IRootState } from '../../store'
import { appApi } from '../../../classes/services/ApiService'
import { productByIdSelector } from './selectors'

export type ProductsState = {
  isProductsFetched: boolean
  data: { [id: string]: IProduct }
}

export const products = {
  state: { isProductsFetched: false, data: {} },
  reducers: {
    productsLoaded: (state: ProductsState, payload: IProduct[]) => {
      return {
        isProductsFetched: true,
        data: {
          ...state.data,
          ...payload.reduce((acc, product: IProduct) => {
            return { ...acc, [product.id]: product }
          }, {}),
        },
      }
    },
    productLoaded: (state: ProductsState, payload: IProduct) => {
      return {
        isProductsFetched: state.isProductsFetched,
        data: { ...state.data, [payload.id]: payload },
      }
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loadProducts() {
      dispatch.loader.showLoader()
      const productResults = (await appApi.getProducts()).data
      dispatch.loader.hideLoader()
      dispatch.products.productsLoaded(productResults)
    },
    async loadProductById(id: string, state: IRootState) {
      const product = productByIdSelector(id)(state)
      if (!product) {
        dispatch.loader.showLoader()
        const products = (await appApi.getProduct(id)).data
        dispatch.products.productLoaded(products[0])
        dispatch.loader.hideLoader()
      }
    },
  }),
}
