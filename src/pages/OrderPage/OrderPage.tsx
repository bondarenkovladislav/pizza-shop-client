import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { IOrder } from '../../interfaces/IOrder'
import { appApi } from '../../core/ApiConfig'
import styles from './OrderPage.module.scss'
import { OrderCard } from '../../components/OrderCard/OrderCard'
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid'

export const OrderPage = () => {
  const [searchPhoneValue, setSearchPhoneValue] = useState('')
  const [orderItems, setOrderItems] = useState<IOrder[]>([])
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <TextField
          label={'Search by Phone'}
          variant={'outlined'}
          value={searchPhoneValue}
          onChange={(e) => setSearchPhoneValue(e.target.value)}
        />
        <Button
          color={'secondary'}
          onClick={async () => {
            if (searchPhoneValue) {
              const result = await appApi.getOrder(
                parseInt(searchPhoneValue, 10)
              )
              setOrderItems(result.data)
            }
          }}
        >
          Get orders
        </Button>
      </div>
      <ProductsGrid<IOrder>
        products={orderItems}
        cardTmpl={(order) => <OrderCard orderItem={order} />}
      />
    </div>
  )
}
