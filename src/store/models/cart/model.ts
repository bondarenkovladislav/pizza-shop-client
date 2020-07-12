import { IPizzaOrderItem } from '../../../interfaces/IPizza'
import { IDrinkOrderItem } from '../../../interfaces/IDrink'

export type CartState = { [id: string]: IPizzaOrderItem | IDrinkOrderItem }

export const cart = {
  state: {},
  reducers: {
    addToCart: (
      state: CartState,
      payload: IPizzaOrderItem | IDrinkOrderItem
    ) => {
      return { ...state, [payload.idInCart]: payload }
    },
    removeFromCart: (state: CartState, idInCart: string) => {
      delete state[idInCart]
      return { ...state }
    },
  },
}
