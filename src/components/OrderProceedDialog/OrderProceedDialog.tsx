import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button,
} from '@material-ui/core'
import { IOrderInfo, PaymentMethod } from '../../interfaces/IOrder'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import styles from './OrderProceedDialog.module.scss'
import { useSelector } from 'react-redux'
import { settingsSelector } from '../../store/models/settings/selectors'
import { getConvertedCurrencyValue } from '../../core/useActualCurrency'
import { Currency } from '../../store/models/settings/model'
import { getCalculatedPrice } from '../../core/PriceCalculation'
import { appApi } from '../../core/ApiConfig'
import { dispatch } from '../../store/store'

interface IProps {
  show: boolean
  onClose: () => void
  onOrderApprove: (item: any) => void
  cartItems: (IPizzaOrderItem | IDrinkOrderItem)[]
}

export const OrderProceedDialog = (props: IProps) => {
  const [formState, setFormState] = useState<IOrderInfo>({} as IOrderInfo)
  const { currency } = useSelector(settingsSelector)
  return (
    <Dialog
      open={props.show}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth={'xs'}
    >
      <DialogTitle id="form-dialog-title">
        Provide personal information
      </DialogTitle>
      <DialogContent>
        <TextField
          label={'Full Name'}
          value={formState.fullName || ''}
          onChange={(e) =>
            setFormState({ ...formState, fullName: e.target.value })
          }
        />
        <TextField
          label={'Country'}
          value={formState.country || ''}
          onChange={(e) =>
            setFormState({ ...formState, country: e.target.value })
          }
        />
        <TextField
          label={'Address'}
          value={formState.address || ''}
          onChange={(e) =>
            setFormState({ ...formState, address: e.target.value })
          }
        />
        <TextField
          label={'Phone Number'}
          value={formState.phoneNumber || ''}
          type="number"
          onChange={(e) =>
            setFormState({
              ...formState,
              phoneNumber: parseInt(e.target.value),
            })
          }
        />
        {props.cartItems.map((cartItem) => (
          <p key={cartItem.idInCart}>{`${cartItem.title} : ${
            getConvertedCurrencyValue(getCalculatedPrice(cartItem), currency)
              .value
          }${currency === Currency.USD ? '$' : '€'}`}</p>
        ))}
        <strong>
          Total price:{' '}
          {
            getConvertedCurrencyValue(
              props.cartItems.reduce(
                (acc, item) => acc + getCalculatedPrice(item),
                0
              ),
              currency
            ).value
          }
          {currency === Currency.USD ? '$' : '€'}
        </strong>
        <div>
          <FormControl className={styles.formControl}>
            <InputLabel id="payment-select-label">Payment Method</InputLabel>
            <Select
              className={styles.formControl}
              labelId="payment-select-label"
              value={formState.paymentMethod || ''}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  paymentMethod: e.target.value as PaymentMethod,
                })
              }
            >
              <MenuItem value={PaymentMethod.online}>Online</MenuItem>
              <MenuItem value={PaymentMethod.courier}>To courier</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={async () => {
            await appApi.createOrder(undefined, {
              items: props.cartItems,
              orderInfo: formState,
            })
            props.onClose()
            dispatch.cart.clearCart()
          }}
          color="primary"
        >
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  )
}
