import React from 'react'
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styles from './ProductCard.module.scss'
import { IProduct } from '../../interfaces/IProduct'
import { dispatch } from '../../store/store'

interface IProps {
  product: IProduct
  onProductSelected: () => void
}

export const ProductCard = ({ product, onProductSelected }: IProps) => {
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={product.title}
        subheader={`${product.price}$`}
      />
      <CardMedia
        className={styles.image}
        image={product.img}
        onClick={onProductSelected}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to card"
          onClick={() => {
            dispatch.cart.addToCart(product.id)
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
