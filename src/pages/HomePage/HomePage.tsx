import React, { useEffect } from 'react'
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

export const HomePage = () => {
  const pizzas = useSelector(pizzasWithIngredientsSelector)
  const drinks = useSelector(drinksSelector)
  const history = useHistory()

  useEffect(() => {
    dispatch.products.loadProducts()
  }, [])

    console.log(pizzas)

  return (
    <div className={styles.root}>
      <Typography variant={'h3'}>Pizzas</Typography>
      <ProductsGrid
        products={pizzas}
        onProductSelected={(id) => history.push(`/product/${id}`)}
      />
      <Typography variant={'h3'}>Drinks</Typography>
      <ProductsGrid
        products={drinks}
        onProductSelected={(id) => history.push(`/product/${id}`)}
      />
    </div>
  )
}
