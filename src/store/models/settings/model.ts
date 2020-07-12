export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export type SettingsState = { currency: Currency }

export const settings = {
  state: { currency: Currency.USD },
  reducers: {
    toggleCurrency: (state: SettingsState) => {
      return {
        ...state,
        currency:
          state.currency === Currency.USD ? Currency.EUR : Currency.USD,
      }
    },
  },
}
