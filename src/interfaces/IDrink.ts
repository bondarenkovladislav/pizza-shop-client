import { IProduct } from './IProduct'

export interface IDrink extends IProduct {
  litres: number
  type: 'drink'
}

export interface IDrinkOrderItem extends IDrink {
  idInCart: string
}
