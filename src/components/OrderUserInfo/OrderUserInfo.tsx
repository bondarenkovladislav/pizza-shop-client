import React from 'react'
import { IOrderInfo } from '../../interfaces/IOrder'
import styles from '../OrderCard/OrderCard.module.scss'
import { TextField } from '@material-ui/core'

interface IProps {
  orderInfo: IOrderInfo
}

export const OrderUserInfo = ({ orderInfo }: IProps) => {
  return (
    <div>
      <div className={styles.row}>
        <TextField
          value={orderInfo.fullName}
          disabled
          label={'Full Name'}
        />
        <TextField
          value={orderInfo.phoneNumber}
          disabled
          label={'Phone Number'}
        />
      </div>
      <div className={styles.row}>
        <TextField
          value={orderInfo.country}
          disabled
          label={'Country'}
        />
        <TextField
          value={orderInfo.address}
          disabled
          label={'Address'}
        />
      </div>
      <TextField
        value={orderInfo.paymentMethod}
        disabled
        label={'Payment Method'}
      />
    </div>
  )
}
