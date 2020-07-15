import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import styles from './OrderProceedDialog.module.scss'
import { IOrderInfo, PaymentMethod } from '../../interfaces/IOrder'

interface IProps {
  formState: IOrderInfo
  setFormState: (value: IOrderInfo) => void
}

export const OrderInputFields = ({ formState, setFormState }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.input}>
          <TextField
            error={!formState.fullName}
            helperText={'Field is required'}
            variant="outlined"
            label={'Full Name'}
            value={formState.fullName || ''}
            onChange={(e) =>
              setFormState({ ...formState, fullName: e.target.value })
            }
          />
        </div>
        <div className={styles.input}>
          <TextField
            variant="outlined"
            label={'Country'}
            value={formState.country || ''}
            onChange={(e) =>
              setFormState({ ...formState, country: e.target.value })
            }
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.input}>
          <TextField
            variant="outlined"
            label={'Address'}
            value={formState.address || ''}
            onChange={(e) =>
              setFormState({ ...formState, address: e.target.value })
            }
          />
        </div>
        <div className={styles.input}>
          <TextField
            error={!formState.phoneNumber}
            helperText={'Field is required'}
            variant="outlined"
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
        </div>
      </div>
      <div className={styles.formContainer}>
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
    </div>
  )
}
