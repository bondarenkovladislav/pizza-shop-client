import { IRootState } from '../../store'
import { ProductsState } from './model'
import { createSelector } from 'reselect'
import { IProduct } from '../../../interfaces/IProduct'
import { IPizza } from '../../../interfaces/IPizza'
import { IDrink } from '../../../interfaces/IDrink'
import { ingredientsStateSelector } from '../ingredients/selectors'
import { IngredientsState } from '../ingredients/model'

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
    ingredientsStateSelector,
    (state: ProductsState, ingredients: IngredientsState) => {
      const currentItem = state.data[id]
      if (currentItem) {
        if ((currentItem as IPizza).ingredients) {
          return {
            ...currentItem,
            ingredients: (currentItem as IPizza).ingredients.map(
              (ingredientId) => ingredients[ingredientId]
            ),
          }
        }
        return currentItem
      } else {
        return null
      }
    }
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

export const pizzasWithIngredientsSelector = createSelector(
  pizzasSelector,
  ingredientsStateSelector,
  (pizzas: IPizza[], ingredients: IngredientsState) => {
    return (pizzas || []).map((pizza) => {
      return {
        ...pizza,
        ingredients: (pizza.ingredients || []).map(
          (ingredientId) => ingredients[ingredientId]
        ),
      }
    })
  }
)
