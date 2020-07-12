import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { cartItemsSelector } from '../../store/models/cart/selectors'
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid'
import { CartItemCard } from '../../components/CartItemCard/CartItemCard'
import { dispatch } from '../../store/store'
import { IPizzaOrderItem } from '../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../interfaces/IDrink'
import { Button } from '@material-ui/core'
import { OrderProceedDialog } from '../../components/OrderProceedDialog/OrderProceedDialog'

export const CartPage = () => {
  const cartItems = useSelector(cartItemsSelector)
  const [showOrderDialog, setShowOrderDialog] = useState(false)

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
      <Button
        variant={'contained'}
        color={'secondary'}
        onClick={() => setShowOrderDialog(true)}
      >
        Proceed order
      </Button>
      <OrderProceedDialog
        show={showOrderDialog}
        onClose={() => setShowOrderDialog(false)}
        onOrderApprove={() => {}}
        cartItems={cartItems}
      />
    </div>
  )
}
