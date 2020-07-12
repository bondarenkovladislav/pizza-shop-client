import React from 'react'
import { getConvertedCurrencyValue } from '../../core/useActualCurrency'
import { Currency } from '../../store/models/settings/model'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useSelector } from 'react-redux'
import { settingsSelector } from '../../store/models/settings/selectors'
import {
  getOrderTotalPrice,
} from '../../core/PriceCalculation'

interface IProps {
  cartItems: (IPizzaOrderItem | IDrinkOrderItem)[]
}

export const OrderTotalPrice = ({ cartItems }: IProps) => {
  const { currency, deliveryCost } = useSelector(settingsSelector)
  return (
    <strong>
      Total price:{' '}
      {
        getConvertedCurrencyValue(
          getOrderTotalPrice(cartItems, deliveryCost),
          currency
        ).value
      }
      {currency === Currency.USD ? '$' : '€'}
    </strong>
  )
}
