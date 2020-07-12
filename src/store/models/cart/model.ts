import { IPizzaOrderItem } from '../../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../../interfaces/IDrink'

export type CartState = { [id: string]: IPizzaOrderItem | IDrinkOrderItem }

export const CART_CACHE_KEY = 'cart-items'

export const cart = {
  state: {},
  reducers: {
    addToCart: (
      state: CartState,
      payload: IPizzaOrderItem | IDrinkOrderItem
    ) => {
      const resultState = { ...state, [payload.idInCart]: payload }
      localStorage.setItem(CART_CACHE_KEY, JSON.stringify(resultState))
      return resultState
    },
    removeFromCart: (state: CartState, idInCart: string) => {
      delete state[idInCart]
      localStorage.setItem(CART_CACHE_KEY, JSON.stringify(state))
      return { ...state }
    },
    initCart: () => {
      const cachedItems = localStorage.getItem(CART_CACHE_KEY)
      if (cachedItems) {
        return JSON.parse(cachedItems)
      }
      return {}
    },
    clearCart: () => {
      localStorage.removeItem(CART_CACHE_KEY)
      return {}
    }
  },
}
