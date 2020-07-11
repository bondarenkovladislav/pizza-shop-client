import { Dispatch } from '../../store'
import { appApi } from '../../../core/ApiConfig'
import { IIngredient } from '../../../interfaces/IIngredient'

export type IngredientsState = {
  [id: string]: IIngredient
}

export const ingredients = {
  state: {},
  reducers: {
    ingredientsLoaded: (state: IngredientsState, payload: IIngredient[]) => {
      return {
        ...state,
        ...payload.reduce((acc, ingredient: IIngredient) => {
          return { ...acc, [ingredient.id]: ingredient }
        }, {}),
      }
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loadIngredients() {
      dispatch.loader.showLoader()
      const ingredientsResults = (await appApi.getIngredients()).data
      dispatch.loader.hideLoader()
      dispatch.ingredients.ingredientsLoaded(ingredientsResults)
    },
  }),
}
