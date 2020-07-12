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
import styles from './CartItemCard.module.scss'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useActualCurrency } from '../../core/useActualCurrency'

interface IProps {
  product: IPizzaOrderItem | IDrinkOrderItem
  onRemoveFromCartClicked: () => void
}

export const CartItemCard = ({ product, onRemoveFromCartClicked }: IProps) => {
  const currentPrice = useActualCurrency(product.price)
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={product.title}
        subheader={`${currentPrice.value}${currentPrice.symbol}`}
      />
      <CardMedia className={styles.image} image={product.img} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <div>
          {(product as IPizzaOrderItem).ingredients &&
            (product as IPizzaOrderItem).ingredients.map(
              (ingredient, index) => (
                <p key={index}>{`${ingredient.name} : ${ingredient.amount}`}</p>
              )
            )}
          {(product as IDrinkOrderItem).litres && (
            <p>{`Litres: ${(product as IDrinkOrderItem).litres}`}</p>
          )}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to card" onClick={onRemoveFromCartClicked}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
