import React, { useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductsGrid.module.scss'
import { Grid } from '@material-ui/core'
import { IProduct } from '../../interfaces/IProduct'
import { AddToCartDialog } from '../AddToCardDialog/AddToCartDialog'
import { dispatch } from '../../store/store'

interface IProps {
  products: IProduct[]
  onProductSelected: (id: string) => void
}

export const ProductsGrid = ({ products, onProductSelected }: IProps) => {
  const [selectedCartProduct, setSelectedCartProduct] = useState()

  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} container item xs={6} sm={4} md={3}>
            <ProductCard
              product={product}
              onProductSelected={() => {
                onProductSelected(product.id)
              }}
              onAddToCartClicked={() => {
                setSelectedCartProduct(product)
              }}
            />
          </Grid>
        ))}
      </Grid>
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
