import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import { models, RootModel } from './models'

export const store = init({
  models,
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type IRootState = RematchRootState<RootModel>
export const dispatch: Dispatch = store.dispatch as Dispatch
//
// export interface IState {
//   products: { [id: string]: IProduct }
//   cart: { [productId: string]: number }
//   settings: {
//     currency: 'usd' | 'eur'
//   }
// }
