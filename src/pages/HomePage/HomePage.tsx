import React, { useEffect } from 'react'
import styles from './HomePage.module.scss'
import { dispatch } from '../../store/store'
import { productsSelector } from '../../store/models/products/selectors'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid'

export const HomePage = () => {
  const products = useSelector(productsSelector)
  const history = useHistory()

  useEffect(() => {
    if (!products.isProductsFetched) {
      dispatch.products.loadProducts()
    }
  }, [])

  return (
    <div className={styles.root}>
      <ProductsGrid
        products={products.data}
        onProductSelected={(id) => history.push(`/product/${id}`)}
      />
    </div>
  )
}
