import { useSelector } from 'react-redux'
import { settingsSelector } from '../store/models/settings/selectors'
import { Currency } from '../store/models/settings/model'

const rates = new Map([
  [Currency.USD, 1],
  [Currency.EUR, 0.89],
])

export const getConvertedCurrencyValue = (value: number, currency: Currency) => ({
  value: ((rates.get(currency) || 1) * value).toFixed(2),
  symbol: currency === Currency.USD ? '$' : '€',
})

export const useActualCurrency = (value: number) => {
  const { currency } = useSelector(settingsSelector)
  return getConvertedCurrencyValue(value, currency)
}
