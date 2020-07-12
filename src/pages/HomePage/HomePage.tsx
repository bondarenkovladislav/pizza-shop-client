import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.scss'
import {
  drinksSelector,
  pizzasWithIngredientsSelector,
} from '../../store/models/products/selectors'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid'
import { dispatch } from '../../store/store'
import { Typography } from '@material-ui/core'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { AddToCartDialog } from '../../components/AddToCardDialog/AddToCartDialog'
import { IPizzaWithIngredients } from '../../interfaces/IPizza'
import { IDrink } from '../../interfaces/IDrink'

export const HomePage = () => {
  const [selectedCartProduct, setSelectedCartProduct] = useState()

  const pizzas = useSelector(pizzasWithIngredientsSelector)
  const drinks = useSelector(drinksSelector)
  const history = useHistory()

  useEffect(() => {
    dispatch.products.loadProducts()
  }, [])

  return (
    <div className={styles.root}>
      <Typography variant={'h3'}>Pizzas</Typography>
      <ProductsGrid<IPizzaWithIngredients>
        products={pizzas}
        cardTmpl={(product) => (
          <ProductCard
            product={product}
            onProductSelected={() => history.push(`/product/${product.id}`)}
            onAddToCartClicked={() => {
              setSelectedCartProduct(product)
            }}
          />
        )}
      />
      <Typography variant={'h3'}>Drinks</Typography>
      <ProductsGrid<IDrink>
        products={drinks}
        cardTmpl={(product) => (
          <ProductCard
            product={product}
            onProductSelected={() => history.push(`/product/${product.id}`)}
            onAddToCartClicked={() => {
              setSelectedCartProduct(product)
            }}
          />
        )}
      />
      <AddToCartDialog
        selectedProduct={selectedCartProduct}
        onClose={() => {
          setSelectedCartProduct(undefined)
        }}
        onApprove={(orderItem) => {
          dispatch.cart.addToCart(orderItem)
          setSelectedCartProduct(undefined)
        }}
      />
    </div>
  )
}
