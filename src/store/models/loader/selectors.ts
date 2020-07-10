import { IRootState } from '../../store'
import { LoaderState } from './model'

export const loaderStateSelector: (state: IRootState) => LoaderState = (
  state: IRootState
) => state.loader
