import React, { useMemo, useState } from 'react'
import { IPizzaOrderItem, IPizzaWithIngredients } from '../../interfaces/IPizza'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@material-ui/core'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useActualCurrency } from '../../core/useActualCurrency'
import { useProductInitialization } from './AddToCartMethods'
import { AddToCartDialogBody } from './AddToCartDialogBody'
import { getCalculatedItemPrice } from '../../core/PriceCalculation'
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

  useProductInitialization(setOrderItem, props.selectedProduct)

  const calculatedPrice = useMemo(() => getCalculatedItemPrice(orderItem), [
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
          <AddToCartDialogBody
            orderItem={orderItem}
            setOrderItem={setOrderItem}
          />
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
