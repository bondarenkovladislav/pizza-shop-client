import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductsGrid.module.scss'
import { Grid } from '@material-ui/core'
import {IProduct} from "../../interfaces/IProduct";

interface IProps {
  products: IProduct[]
  onProductSelected: (id: string) => void
}

export const ProductsGrid = ({ products, onProductSelected }: IProps) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid container item xs={6} sm={4} md={3}>
            <ProductCard
              product={product}
              onProductSelected={() => {
                onProductSelected(product.id)
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
