import React from 'react'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import styles from './DrinkOptions.module.scss'

interface IProps {
  drinkItem: IDrinkOrderItem
  onChangeValue: (newValue: IDrinkOrderItem) => void
}

export const DrinkOptions = (props: IProps) => {
  return (
    <div className={styles.root}>
      <span>Litres: </span>
      <div>
        <IconButton
          onClick={() =>
            props.onChangeValue({
              ...props.drinkItem,
              litres: props.drinkItem.litres + 1,
            })
          }
        >
          <AddIcon />
        </IconButton>
        <span>{props.drinkItem.litres}</span>
        <IconButton
          onClick={() =>
            props.drinkItem.litres > 0 &&
            props.onChangeValue({
              ...props.drinkItem,
              litres: props.drinkItem.litres - 1,
            })
          }
        >
          <RemoveIcon />
        </IconButton>
      </div>
    </div>
  )
}
