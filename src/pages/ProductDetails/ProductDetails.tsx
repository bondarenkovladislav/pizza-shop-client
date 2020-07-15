import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productByIdSelector } from '../../store/models/products/selectors'
import { dispatch } from '../../store/store'
import { useActualCurrency } from '../../core/useActualCurrency'
import { IPizzaWithIngredients } from '../../interfaces/IPizza'
import styles from './ProductDetails.module.scss'
import { IngredientItem } from '../../components/IngredientItem/IngredientItem'
import { Button, Grid } from '@material-ui/core'
import { AddToCartDialog } from '../../components/AddToCardDialog/AddToCartDialog'

export const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector(productByIdSelector(id))
  const price = useActualCurrency((product || { price: 0 }).price)
  const [selectedCartProduct, setSelectedCartProduct] = useState()
  const history = useHistory()

  useEffect(() => {
    dispatch.products.loadProductById(id)
  }, [id])

  if (!product) {
    return <></>
  }

  return (
    // <div className={styles.root}
    //   >
    <Grid container spacing={2}>
      {/*<div className={styles.halfCell}>*/}
      <Grid container item xs={12} sm={6}>
        <img className={styles.img} src={product.img} />
      </Grid>
      {/*<div className={styles.halfCell}>*/}
      <Grid container item xs={12} sm={6} className={styles.halfCell}>
        <div>
          <p className={styles.title}>{product.title}</p>
          <p>{product.description}</p>
          <div className={styles.ingredientsContainer}>
            {(product as IPizzaWithIngredients).ingredients &&
              (product as IPizzaWithIngredients).ingredients.map(
                (ingredient) =>
                  ingredient && <IngredientItem ingredient={ingredient} />
              )}
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.price}>
            {price.value} {price.symbol}
          </p>
          <Button
            variant="contained"
            color={'secondary'}
            className={styles.stockButton}
            onClick={() => setSelectedCartProduct(product)}
          >
            IN STOCK
          </Button>
        </div>
      </Grid>
      <AddToCartDialog
        selectedProduct={selectedCartProduct}
        onClose={() => {
          setSelectedCartProduct(undefined)
        }}
        onApprove={(orderItem) => {
          dispatch.cart.addToCart(orderItem)
          setSelectedCartProduct(undefined)
          history.push('/cart')
        }}
      />
    </Grid>
  )
}
