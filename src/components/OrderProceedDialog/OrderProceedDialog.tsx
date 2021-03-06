import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core'
import { IOrderInfo } from '../../interfaces/IOrder'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { appApi } from '../../core/ApiConfig'
import { dispatch } from '../../store/store'
import { OrderInputFields } from './OrderInputFields'
import { OrderItems } from './OrderItems'
import { OrderTotalPrice } from './OrderTotalPrice'
import styles from './OrderProceedDialog.module.scss'
import { useHistory } from 'react-router-dom'
interface IProps {
  show: boolean
  onClose: () => void
  onOrderApprove: (item: any) => void
  cartItems: (IPizzaOrderItem | IDrinkOrderItem)[]
}

export const OrderProceedDialog = (props: IProps) => {
  const [formState, setFormState] = useState<IOrderInfo>({} as IOrderInfo)
  const history = useHistory()
  return (
    <Dialog
      open={props.show}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth={'xs'}
    >
      <DialogTitle className={styles.title} id="form-dialog-title">
        Provide personal information
      </DialogTitle>
      <DialogContent>
        <OrderInputFields formState={formState} setFormState={setFormState} />
        <OrderItems cartItems={props.cartItems} />
        <OrderTotalPrice cartItems={props.cartItems} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={!formState.fullName || !formState.phoneNumber}
          onClick={async () => {
            await appApi.createOrder(undefined, {
              items: props.cartItems,
              orderInfo: formState,
            })
            props.onClose()
            dispatch.cart.clearCart()
            history.push('/')
          }}
          color="secondary"
        >
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  )
}
