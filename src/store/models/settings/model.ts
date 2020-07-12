export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export type SettingsState = { currency: Currency; deliveryCost: number }

export const settings = {
  state: { currency: Currency.USD, deliveryCost: 2 },
  reducers: {
    toggleCurrency: (state: SettingsState) => {
      return {
        ...state,
        currency: state.currency === Currency.USD ? Currency.EUR : Currency.USD,
      }
    },
  },
}
