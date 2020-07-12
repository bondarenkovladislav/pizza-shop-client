import { IPizzaOrderItem } from '../interfaces/IPizza'
import { IDrinkOrderItem } from '../interfaces/IDrink'

export const getCalculatedItemPrice = (
  product?: IPizzaOrderItem | IDrinkOrderItem
) => {
  if (!product) {
    return 0
  }
  if ((product as IPizzaOrderItem).ingredients) {
    return (
      (product as IPizzaOrderItem).ingredients.reduce(
        (acc, item) =>
          item.amount !== 1 ? acc + (item.amount - 1) * item.price : acc,
        0
      ) + product.price
    )
  } else {
    return (
      product.price + ((product as IDrinkOrderItem).litres - 1) * product.price
    )
  }
}

export const getOrderTotalPrice = (
  cartItems: (IPizzaOrderItem | IDrinkOrderItem)[],
  deliveryCost: number
) =>
  cartItems.reduce((acc, item) => acc + getCalculatedItemPrice(item), 0) +
  deliveryCost
