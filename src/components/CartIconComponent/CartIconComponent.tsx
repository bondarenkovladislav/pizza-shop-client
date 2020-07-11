import React from 'react'
import { Badge, IconButton } from '@material-ui/core'
// import styles from './CartIconComponent.module.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export const CartIconComponent = () => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}
