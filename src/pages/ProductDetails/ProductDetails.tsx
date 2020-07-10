import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productByIdSelector } from '../../store/models/products/selectors'
import { dispatch } from '../../store/store'

export const ProductDetails = () => {
  const { id } = useParams()
  dispatch.products.loadProductById(id)
  const product = useSelector(productByIdSelector(id))

  return <div>{product && product.title}</div>
}
