import React, { useEffect, useState } from 'react'
import { IPizzaOrderItem, IPizzaWithIngredients } from '../../interfaces/IPizza'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@material-ui/core'
import { IngredientRow } from '../IngredientRow/IngredientRow'
import { uuidv4 } from '../../core/UUID'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { DrinkOptions } from '../DrinkOptions/DrinkOptions'
// import styles from './AddToCartDialog.module.scss'

interface IProps {
  selectedProduct?: IPizzaWithIngredients | IDrinkOrderItem
  onClose: () => void
  onApprove: (orderItem: IPizzaOrderItem | IDrinkOrderItem) => void
}

export const AddToCartDialog = (props: IProps) => {
  const [orderItem, setOrderItem] = useState<
    IPizzaOrderItem | IDrinkOrderItem
  >()

  useEffect(() => {
    if (props.selectedProduct) {
      if ((props.selectedProduct as IPizzaOrderItem).ingredients) {
        setOrderItem({
          ...props.selectedProduct,
          idInCart: uuidv4(),
          ingredients: (props.selectedProduct as IPizzaOrderItem).ingredients.map(
            (ingredient) => ({
              ...ingredient,
              amount: 1,
            })
          ),
        } as IPizzaOrderItem)
      } else {
        setOrderItem({
          ...props.selectedProduct,
          idInCart: uuidv4(),
        } as IDrinkOrderItem)
      }
    }
  }, [props.selectedProduct])

  return (
    <Dialog
      open={!!props.selectedProduct}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth={'sm'}
    >
      <DialogTitle id="form-dialog-title">Choose Ingredients</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {orderItem && (orderItem as IPizzaOrderItem).ingredients ? (
            (orderItem as IPizzaOrderItem).ingredients.map(
              (ingredient, index) => (
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
              )
            )
          ) : (
            <DrinkOptions
              drinkItem={orderItem as IDrinkOrderItem}
              onChangeValue={(newDrinkItem) =>
                setOrderItem({ ...newDrinkItem })
              }
            />
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => orderItem && props.onApprove(orderItem)}
          color="primary"
        >
          Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  )
}
