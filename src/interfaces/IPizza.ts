import { IProduct } from './IProduct'
import { IIngredient, IIngredientOrderItem } from './IIngredient'

export interface IPizza extends IProduct {
  ingredients: string[]
  type: 'pizza'
}

export interface IPizzaWithIngredients extends Omit<IPizza, 'ingredients'> {
  ingredients: IIngredient[]
}

export interface IPizzaOrderItem extends Omit<IPizza, 'ingredients'> {
  idInCart: string
  ingredients: IIngredientOrderItem[]
}
