import { IPizzaOrderItem } from './IPizza'
import { IDrinkOrderItem } from './IDrink'

export interface IOrder {
  orderInfo: IOrderInfo
  items: (IPizzaOrderItem | IDrinkOrderItem)[]
}

export interface IOrderInfo {
  fullName: string
  phoneNumber: number
  country: string
  address: string
  paymentMethod: PaymentMethod
}

export enum PaymentMethod {
  online = 'online',
  courier = 'courier',
}
