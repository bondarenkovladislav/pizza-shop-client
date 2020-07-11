import React from 'react'
import { Badge, IconButton } from '@material-ui/core'
// import styles from './CartIconComponent.module.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'
import { cartItemsCountSelector } from '../../store/models/cart/selectors'

interface IProps {
  onClick: () => void
}

export const CartIconComponent = (props: IProps) => {
  const itemsCount = useSelector(cartItemsCountSelector)
  return (
    <IconButton aria-label="cart" onClick={props.onClick}>
      <Badge badgeContent={itemsCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}
