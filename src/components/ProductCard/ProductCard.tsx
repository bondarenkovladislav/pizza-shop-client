import React from 'react'
import { Card, CardMedia, Button } from '@material-ui/core'
import styles from './ProductCard.module.scss'
import { IProduct } from '../../interfaces/IProduct'
import { useActualCurrency } from '../../core/useActualCurrency'

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
  const currentPrice = useActualCurrency(product.price)
  return (
    <Card className={styles.card}>
      <div>
        <CardMedia
          className={styles.image}
          image={product.img}
          onClick={onProductSelected}
        />
        <p className={styles.header}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
      <div className={styles.footer}>
        <Button
          variant="contained"
          color={'secondary'}
          className={styles.stockButton}
          onClick={onAddToCartClicked}
        >
          IN STOCK
        </Button>
        <span className={styles.price}>
          {currentPrice.value}
          {currentPrice.symbol}
        </span>
      </div>
    </Card>
  )
}
