import { IRootState } from '../../store'
import { CartState } from './model'
import { createSelector } from 'reselect'

export const cartStateSelector: (state: IRootState) => CartState = (
  state: IRootState
) => state.cart

export const cartItemsCountSelector = createSelector(
  cartStateSelector,
  (state: CartState) =>
    Object.keys(state).reduce((acc, productId) => acc + state[productId], 0)
)
