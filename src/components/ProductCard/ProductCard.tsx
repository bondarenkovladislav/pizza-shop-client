import React from 'react'
import { IProduct } from '../../store/store'
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

interface IProps {
  product: IProduct
  onProductSelected: () => void
}

export const ProductCard = ({ product, onProductSelected }: IProps) => {
  return (
    <Card onClick={onProductSelected} className={styles.card}>
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
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to card">
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
