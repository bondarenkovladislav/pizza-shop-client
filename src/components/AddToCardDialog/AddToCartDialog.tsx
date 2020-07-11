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
// import styles from './AddToCartDialog.module.scss'

interface IProps {
  selectedProduct?: IPizzaWithIngredients
  onClose: () => void
  onApprove: (orderItem: IPizzaOrderItem) => void
}

export const AddToCartDialog = (props: IProps) => {
  const [orderItem, setOrderItem] = useState<IPizzaOrderItem>()

  useEffect(() => {
    if (props.selectedProduct) {
      setOrderItem({
        ...props.selectedProduct,
        idInCart: uuidv4(),
        ingredients: props.selectedProduct.ingredients.map((ingredient) => ({
          ...ingredient,
          amount: 1,
        })),
      })
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
          {orderItem &&
            orderItem.ingredients.map((ingredient, index) => (
              <IngredientRow
                ingredient={ingredient}
                onChangeValue={(newIngredient) => {
                  if (orderItem) {
                    const newOrderItem = { ...orderItem }
                    newOrderItem.ingredients.splice(index, 1, newIngredient)
                    setOrderItem(newOrderItem)
                  }
                }}
              />
            ))}
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
