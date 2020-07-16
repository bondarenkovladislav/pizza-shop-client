import React, { useMemo } from 'react'
import { Card, CardMedia, Button } from '@material-ui/core'
import styles from './CartItemCard.module.scss'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { useActualCurrency } from '../../core/useActualCurrency'
import { getCalculatedItemPrice } from '../../core/PriceCalculation'
import { IngredientItem } from '../IngredientItem/IngredientItem'

interface IProps {
  product: IPizzaOrderItem | IDrinkOrderItem
  onProductClicked?: () => void
  onRemoveFromCartClicked?: () => void
}

export const CartItemCard = ({
  product,
  onRemoveFromCartClicked,
  onProductClicked,
}: IProps) => {
  const calculatedPrice = useMemo(() => getCalculatedItemPrice(product), [
    product,
  ])
  const currentPrice = useActualCurrency(calculatedPrice)
  return (
    <Card className={styles.card}>
      <div>
        <CardMedia
          className={styles.image}
          image={product.img}
          onClick={() => onProductClicked && onProductClicked()}
        />
        <p className={styles.header}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.productContainer}>
          {(product as IPizzaOrderItem).ingredients &&
            (product as IPizzaOrderItem).ingredients.map((ingredient) => (
              <div key={`${product.id}${ingredient.id}`} className={styles.row}>
                <IngredientItem ingredient={ingredient} />
                <p>{ingredient.amount}</p>
              </div>
            ))}
          {(product as IDrinkOrderItem).litres && (
            <p>{`Litres: ${(product as IDrinkOrderItem).litres}`}</p>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        {onRemoveFromCartClicked && (
          <Button
            variant="contained"
            color={'primary'}
            className={styles.stockButton}
            onClick={onRemoveFromCartClicked}
          >
            REMOVE
          </Button>
        )}
        <span className={styles.price}>
          {currentPrice.value}
          {currentPrice.symbol}
        </span>
      </div>
    </Card>
  )
}
