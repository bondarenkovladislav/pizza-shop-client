import { uuidv4 } from '../../core/UUID'
import {IPizzaOrderItem, IPizzaWithIngredients} from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useEffect } from 'react'

export const initPizzaOrderItem = (selectedProduct: IPizzaOrderItem) => ({
  ...selectedProduct,
  idInCart: uuidv4(),
  ingredients: (selectedProduct as IPizzaOrderItem).ingredients.map(
    (ingredient) => ({
      ...ingredient,
      amount: 1,
    })
  ),
})

export const initDrinkOrderItem = (selectedProduct: IDrinkOrderItem) => ({
  ...selectedProduct,
  idInCart: uuidv4(),
})

export const useProductInitialization = (
  setOrderItem: (value: IPizzaOrderItem | IDrinkOrderItem) => void,
  selectedProduct?: IPizzaWithIngredients | IDrinkOrderItem,
) => {
  useEffect(() => {
    if (selectedProduct) {
      if ((selectedProduct as IPizzaOrderItem).ingredients) {
        setOrderItem(
          initPizzaOrderItem(selectedProduct as IPizzaOrderItem)
        )
      } else {
        setOrderItem(
          initDrinkOrderItem(selectedProduct as IDrinkOrderItem)
        )
      }
    }
  }, [selectedProduct])
}
