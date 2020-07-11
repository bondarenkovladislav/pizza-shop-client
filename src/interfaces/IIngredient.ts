export interface IIngredient {
  id: string
  price: number
  name: string
}

export interface IIngredientOrderItem extends IIngredient {
  amount: number
}
