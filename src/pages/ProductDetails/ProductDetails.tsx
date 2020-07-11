import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productByIdSelector } from '../../store/models/products/selectors'
import { dispatch } from '../../store/store'

export const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector(productByIdSelector(id))
  console.log(product)

  useEffect(() => {
    dispatch.products.loadProductById(id)
  }, [id])

  return <div>{product && product.title}</div>
}
