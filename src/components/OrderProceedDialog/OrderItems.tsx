import { getConvertedCurrencyValue } from '../../core/useActualCurrency'
import { Currency } from '../../store/models/settings/model'
import React from 'react'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useSelector } from 'react-redux'
import { settingsSelector } from '../../store/models/settings/selectors'
import { getCalculatedItemPrice } from '../../core/PriceCalculation'

interface IProps {
  cartItems: (IPizzaOrderItem | IDrinkOrderItem)[]
}

export const OrderItems = ({ cartItems }: IProps) => {
  const { currency, deliveryCost } = useSelector(settingsSelector)
  return (
    <div>
      {cartItems.map((cartItem) => (
        <p key={cartItem.idInCart}>{`${cartItem.title} : ${
          getConvertedCurrencyValue(getCalculatedItemPrice(cartItem), currency)
            .value
        }${currency === Currency.USD ? '$' : '€'}`}</p>
      ))}
      <p>
        Delivery: {getConvertedCurrencyValue(deliveryCost, currency).value}{' '}
        {currency === Currency.USD ? '$' : '€'}
      </p>
    </div>
  )
}
