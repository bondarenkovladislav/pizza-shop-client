import React, { useEffect, useMemo, useState } from 'react'
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
import { useActualCurrency } from '../../core/useActualCurrency'
import { getCalculatedPrice } from '../../core/PriceCalculation'
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

  const basicPrice = useActualCurrency(orderItem ? orderItem.price : 0)

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

  const calculatedPrice = useMemo(() => getCalculatedPrice(orderItem), [
    orderItem,
  ])
  const calculatedCurrencyPrice = useActualCurrency(calculatedPrice)

  if (!orderItem) {
    return <></>
  }

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
        <p>
          Basic price: {basicPrice.value}
          {basicPrice.symbol}
        </p>
        <DialogContentText>
          {(orderItem as IPizzaOrderItem).ingredients ? (
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
          <p>
            Calculated price: {calculatedCurrencyPrice.value}
            {calculatedCurrencyPrice.symbol}
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.onApprove(orderItem)} color="primary">
          Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  )
}
