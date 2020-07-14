import React from 'react'
import { IIngredientOrderItem } from '../../interfaces/IIngredient'
import styles from './IngredientRow.module.scss'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { IngredientItem } from '../IngredientItem/IngredientItem'

interface IProps {
  ingredient: IIngredientOrderItem
  onChangeValue: (newValue: IIngredientOrderItem) => void
}

export const IngredientRow = (props: IProps) => {
  return (
    <div className={styles.root}>
      <IngredientItem ingredient={props.ingredient} />
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
