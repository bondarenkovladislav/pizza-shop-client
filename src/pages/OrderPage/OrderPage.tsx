import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { IOrder } from '../../interfaces/IOrder'
import { appApi } from '../../core/ApiConfig'

export const OrderPage = () => {
  const [searchPhoneValue, setSearchPhoneValue] = useState('')
  const [orderItems, setOrderItems] = useState<IOrder[]>([])
  return (
    <div>
      <TextField
        value={searchPhoneValue}
        onChange={(e) => setSearchPhoneValue(e.target.value)}
      />
      <Button
        onClick={async () => {
          const result = await appApi.getOrder(parseInt(searchPhoneValue, 10))
          setOrderItems(result.data)
        }}
      >
        Get orders
      </Button>
      {orderItems.map((item) => (
        <div>{item.orderInfo.fullName}</div>
      ))}
    </div>
  )
}
