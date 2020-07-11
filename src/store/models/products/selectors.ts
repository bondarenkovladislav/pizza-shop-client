import { IRootState } from '../../store'
import { ProductsState } from './model'
import { createSelector } from 'reselect'

export const productsStateSelector: (state: IRootState) => ProductsState = (
  state: IRootState
) => state.products

export const productsSelector = createSelector(
  productsStateSelector,
  (state: ProductsState) => ({
    isProductsFetched: state.isProductsFetched,
    data: Object.keys(state.data).map((id) => state.data[id]),
  })
)

export const productByIdSelector = (id: string) =>
  createSelector(
    productsStateSelector,
    (state: ProductsState) => state.data[id]
  )
