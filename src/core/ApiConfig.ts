import axios, { AxiosResponse } from 'axios'
import { IProduct } from '../interfaces/IProduct'
import { IIngredient } from '../interfaces/IIngredient'
import { IOrder } from '../interfaces/IOrder'

const API_ROOT = 'https://vibrant-croissant-02483.herokuapp.com'

export type ApiCall<P, T, B = void> = (
  urlParams?: P,
  body?: B
) => Promise<AxiosResponse<T>>

export interface AppApi {
  getProducts: ApiCall<void, IProduct[]>
  getProduct: ApiCall<string, IProduct>
  getIngredients: ApiCall<void, IIngredient[]>
  createOrder: ApiCall<void, string, IOrder>
  getOrder: ApiCall<number, IOrder[]>
}

export const appApi: AppApi = {
  getProducts: () => axios.get(`${API_ROOT}/products`),
  getProduct: (id?: string) => axios.get(`${API_ROOT}/product?id=${id}`),
  getIngredients: () => axios.get(`${API_ROOT}/ingredients`),
  createOrder: (params: void, item?: IOrder) =>
    axios.post(`${API_ROOT}/order`, item),
  getOrder: (phoneNumber?: number) => axios.get(`${API_ROOT}/order?phoneNumber=${phoneNumber}`),
}
