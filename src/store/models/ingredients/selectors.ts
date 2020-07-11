import { IRootState } from '../../store'
import { createSelector } from 'reselect'
import { IngredientsState } from './model'

export const ingredientsStateSelector: (
  state: IRootState
) => IngredientsState = (state: IRootState) => state.ingredients

export const ingredientsSelector = createSelector(
  ingredientsStateSelector,
  (state: IngredientsState) =>
    Object.keys(state.data).map((id) => state[id])
)

export const ingredientByIdSelector = (id: string) =>
  createSelector(
    ingredientsStateSelector,
    (state: IngredientsState) => state[id]
  )
