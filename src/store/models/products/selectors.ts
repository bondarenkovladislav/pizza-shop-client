import {IRootState} from '../../store'
import { ProductsState } from './model'
import {createSelector} from "reselect";

export const productsStateSelector: (state: IRootState) => ProductsState = (
  state: IRootState
) => state.products

export const productsSelector = createSelector(
    productsStateSelector,
    (state: ProductsState) => Object.keys(state).map((id) => state[id])
);
