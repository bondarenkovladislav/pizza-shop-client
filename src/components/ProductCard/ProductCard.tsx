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

interface IProps {
  product: IProduct
  onProductSelected: () => void
  onAddToCartClicked: () => void
}

export const ProductCard = ({
  product,
  onProductSelected,
  onAddToCartClicked,
}: IProps) => {
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
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
        <IconButton aria-label="add to card" onClick={onAddToCartClicked}>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
