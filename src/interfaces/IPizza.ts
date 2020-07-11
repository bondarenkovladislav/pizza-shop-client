import { IProduct } from './IProduct'
import { IIngredient } from './IIngredient'

export interface IPizza extends IProduct {
  ingredients: string[]
  type: 'pizza'
}

export interface IPizzaWithIngredients extends Omit<IPizza, 'ingredients'> {
  ingredients: IIngredient[]
}
