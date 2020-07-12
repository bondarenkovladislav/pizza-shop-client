import { IRootState } from '../../store'
import { SettingsState } from './model'
import { createSelector } from 'reselect'

export const settingsStateSelector: (state: IRootState) => SettingsState = (
  state: IRootState
) => state.settings

export const settingsSelector = createSelector(
  settingsStateSelector,
  (state: SettingsState) => state
)
