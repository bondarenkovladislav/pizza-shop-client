import React from 'react'
import styles from './ProductsGrid.module.scss'
import { Grid } from '@material-ui/core'

interface IProps<T> {
  products: T[]
  cardTmpl: (product: T) => JSX.Element
}

export const ProductsGrid = <T,>({ products, cardTmpl }: IProps<T>) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid container item xs={6} sm={4} md={3}>
            {cardTmpl(product)}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
