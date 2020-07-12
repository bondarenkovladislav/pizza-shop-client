import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productByIdSelector } from '../../store/models/products/selectors'
import { dispatch } from '../../store/store'
import { Typography } from '@material-ui/core'
import { useActualCurrency } from '../../core/useActualCurrency'
import { IPizzaWithIngredients } from '../../interfaces/IPizza'

export const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector(productByIdSelector(id))
  const price = useActualCurrency((product || { price: 0 }).price)

  useEffect(() => {
    dispatch.products.loadProductById(id)
  }, [id])

  if (!product) {
    return <></>
  }

  return (
    <div>
      <Typography variant={'h3'}>{product.title}</Typography>
      <img src={product.img} />
      <Typography variant={'body2'}>{product.description}</Typography>
      {(product as IPizzaWithIngredients).ingredients &&
        (product as IPizzaWithIngredients).ingredients.map(
          (ingredient) => ingredient && <p>{ingredient.name}</p>
        )}
      <p>{`Price: ${price.value}${price.symbol}`}</p>
    </div>
  )
}
