import { IProduct } from './IProduct'
import { IIngredient } from './IIngredient'

export interface IPizza extends IProduct {
  ingredients: IIngredient[]
  type: 'pizza'
}
