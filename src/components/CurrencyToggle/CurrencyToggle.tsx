import React from 'react'
import { Switch } from '@material-ui/core'
import styles from './CurrencyToggle.module.scss'
import { useSelector } from 'react-redux'
import { settingsSelector } from '../../store/models/settings/selectors'
import { Currency } from '../../store/models/settings/model'
import { dispatch } from '../../store/store'

export const CurrencyToggle = () => {
  const { currency } = useSelector(settingsSelector)
  return (
    <div className={styles.root}>
      <p>$</p>
      <Switch
        checked={currency === Currency.EUR}
        onChange={() => dispatch.settings.toggleCurrency()}
      />
      <p>€</p>
    </div>
  )
}
