import { IPizzaOrderItem } from '../../../interfaces/IPizza'

export type CartState = { [id: string]: IPizzaOrderItem }

export const cart = {
  state: {},
  reducers: {
    addToCart: (state: CartState, payload: IPizzaOrderItem) => {
      return { ...state, [payload.idInCart]: payload }
    },
    removeFromCart: (state: CartState, idInCart: string) => {
      delete state[idInCart]
      return state
    },
  },
}
