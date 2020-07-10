import axios, { AxiosResponse } from 'axios'
import { IProduct } from '../../store/store'

const API_ROOT = 'http://localhost:5000'

export type ApiCall<P, T, B = void> = (
  urlParams?: P,
  body?: B
) => Promise<AxiosResponse<T>>

export interface AppApi {
  getProducts: ApiCall<void, IProduct[]>
}

export const appApi: AppApi = {
  getProducts: () => axios.get(`${API_ROOT}/get-stock`),
}
