import { IRootState } from '../../store'
import { ProductsState } from './model'
import { createSelector } from 'reselect'
import { IProduct } from '../../../interfaces/IProduct'
import { IPizza } from '../../../interfaces/IPizza'
import { IDrink } from '../../../interfaces/IDrink'

export const productsStateSelector: (state: IRootState) => ProductsState = (
  state: IRootState
) => state.products

export const productsSelector = createSelector(
  productsStateSelector,
  (state: ProductsState) => Object.keys(state.data).map((id) => state.data[id])
)

export const productByIdSelector = (id: string) =>
  createSelector(
    productsStateSelector,
    (state: ProductsState) => state.data[id]
  )

export const productsFetchedSelector = createSelector(
  productsStateSelector,
  (state: ProductsState) => state.isProductsFetched
)

export const pizzasSelector = createSelector(
  productsSelector,
  (state: IProduct[]) =>
    state.filter((item) => item.type === 'pizza') as IPizza[]
)

export const drinksSelector = createSelector(
  productsSelector,
  (state: IProduct[]) =>
    state.filter((item) => item.type === 'drink') as IDrink[]
)
