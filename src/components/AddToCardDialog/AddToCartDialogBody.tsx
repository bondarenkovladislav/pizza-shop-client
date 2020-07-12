import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IngredientRow } from '../IngredientRow/IngredientRow'
import { DrinkOptions } from '../DrinkOptions/DrinkOptions'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import React from 'react'

interface IProps {
  orderItem: IPizzaOrderItem | IDrinkOrderItem
  setOrderItem: (value: IPizzaOrderItem | IDrinkOrderItem) => void
}

export const AddToCartDialogBody = ({ orderItem, setOrderItem }: IProps) => {
  return (
    <div>
      {' '}
      {(orderItem as IPizzaOrderItem).ingredients ? (
        (orderItem as IPizzaOrderItem).ingredients.map((ingredient, index) => (
          <IngredientRow
            ingredient={ingredient}
            onChangeValue={(newIngredient) => {
              if (orderItem) {
                const newOrderItem = { ...orderItem } as IPizzaOrderItem
                newOrderItem.ingredients.splice(index, 1, newIngredient)
                setOrderItem(newOrderItem)
              }
            }}
          />
        ))
      ) : (
        <DrinkOptions
          drinkItem={orderItem as IDrinkOrderItem}
          onChangeValue={(newDrinkItem) => setOrderItem({ ...newDrinkItem })}
        />
      )}
    </div>
  )
}
