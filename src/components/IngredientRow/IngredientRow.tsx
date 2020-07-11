import React from 'react'
import { IIngredientOrderItem } from '../../interfaces/IIngredient'
import styles from './IngredientRow.module.scss'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

interface IProps {
  ingredient: IIngredientOrderItem
  onChangeValue: (newValue: IIngredientOrderItem) => void
}

export const IngredientRow = (props: IProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.name}>{props.ingredient.name}</span>
      <div>
        <IconButton
          onClick={() =>
            props.onChangeValue({
              ...props.ingredient,
              amount: props.ingredient.amount + 1,
            })
          }
        >
          <AddIcon />
        </IconButton>
        <span>{props.ingredient.amount}</span>
        <IconButton
          onClick={() =>
            props.ingredient.amount > 0 &&
            props.onChangeValue({
              ...props.ingredient,
              amount: props.ingredient.amount - 1,
            })
          }
        >
          <RemoveIcon />
        </IconButton>
      </div>
    </div>
  )
}
