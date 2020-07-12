import React from 'react'
import { useSelector } from 'react-redux'
import { cartItemsSelector } from '../../store/models/cart/selectors'
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid'
import { CartItemCard } from '../../components/CartItemCard/CartItemCard'
import { dispatch } from '../../store/store'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'

export const CartPage = () => {
  const cartItems = useSelector(cartItemsSelector)

  return (
    <div>
      <ProductsGrid<IPizzaOrderItem | IDrinkOrderItem>
        products={cartItems}
        keyField={'idInCart'}
        cardTmpl={(product) => (
          <CartItemCard
            product={product}
            onRemoveFromCartClicked={() => {
              dispatch.cart.removeFromCart(product.idInCart)
            }}
          />
        )}
      />
    </div>
  )
}
