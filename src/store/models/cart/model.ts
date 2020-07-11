export type CartState = { [productId: string]: number }

export const cart = {
  state: {},
  reducers: {
    addToCart: (state: CartState, productId: string) => {
      return { ...state, [productId]: (state[productId] || 0) + 1 }
    },
    removeFromCart: (state: CartState, productId: string) => {
      return { ...state, [productId]: Math.max((state[productId] || 0) - 1, 0) }
    },
  },
}
