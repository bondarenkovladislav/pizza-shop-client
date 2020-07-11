import axios, { AxiosResponse } from 'axios'
import { IProduct } from '../interfaces/IProduct'
import { IIngredient } from '../interfaces/IIngredient'

const API_ROOT = 'http://localhost:5000'

export type ApiCall<P, T, B = void> = (
  urlParams?: P,
  body?: B
) => Promise<AxiosResponse<T>>

export interface AppApi {
  getProducts: ApiCall<void, IProduct[]>
  getProduct: ApiCall<string, IProduct>
  getIngredients: ApiCall<void, IIngredient[]>
}

export const appApi: AppApi = {
  getProducts: () => axios.get(`${API_ROOT}/products`),
  getProduct: (id?: string) => axios.get(`${API_ROOT}/product?id=${id}`),
  getIngredients: () => axios.get(`${API_ROOT}/ingredients`),
}
