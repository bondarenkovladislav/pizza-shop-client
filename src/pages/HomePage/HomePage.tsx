import React, { useEffect } from 'react'
import styles from './HomePage.module.scss'
import { Button } from '@material-ui/core'
import { dispatch } from '../../store/store'
import { productsSelector } from '../../store/models/products/selectors'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
      {products.data.map((product) => (
        <div
          onClick={() => {
            history.push(`/product/${product.id}`)
          }}
        >
          {product.title}
        </div>
      ))}
      <Button
        onClick={async () => {
          await dispatch.products.loadProducts()
        }}
      >
        Hello
      </Button>
    </div>
  )
}
