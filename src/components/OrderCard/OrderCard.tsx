import React, { useState } from 'react'
import { IOrder } from '../../interfaces/IOrder'
import styles from './OrderCard.module.scss'
import { Dialog } from '@material-ui/core'
import { CartItemCard } from '../CartItemCard/CartItemCard'
import { getOrderTotalPrice } from '../../core/PriceCalculation'
import { useSelector } from 'react-redux'
import { settingsSelector } from '../../store/models/settings/selectors'
import { getConvertedCurrencyValue } from '../../core/useActualCurrency'
import { OrderUserInfo } from '../OrderUserInfo/OrderUserInfo'

interface IProps {
  orderItem: IOrder
}

export const OrderCard = ({ orderItem }: IProps) => {
  const [selectedItem, setSelectedItem] = useState()
  const { currency, deliveryCost } = useSelector(settingsSelector)
  const totalPrice = getOrderTotalPrice(orderItem.items, deliveryCost)
  const convertedTotalPrice = getConvertedCurrencyValue(totalPrice, currency)
  return (
    <div className={styles.root}>
      <div>
        <OrderUserInfo orderInfo={orderItem.orderInfo} />
        <div>
          <p className={styles.orderedTitle}>Ordered items:</p>
          {orderItem.items.map((item) => (
            <p
              className={styles.productItem}
              onClick={() => setSelectedItem(item)}
            >
              {item.title}
            </p>
          ))}
        </div>
        {selectedItem && (
          <Dialog
            open
            onClose={() => setSelectedItem(undefined)}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth={'xs'}
          >
            <CartItemCard product={selectedItem} />
          </Dialog>
        )}
      </div>
      <p className={styles.priceText}>
        {convertedTotalPrice.value}
        {convertedTotalPrice.symbol}
      </p>
    </div>
  )
}
