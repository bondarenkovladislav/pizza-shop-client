import React from 'react'
import styles from './Loader.module.scss'
import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import { loaderStateSelector } from '../../store/models/loader/selectors'
import classNames from 'classnames'

interface IProps {
  children: JSX.Element
}

export const Loader = ({ children }: IProps) => {
  const loading = useSelector(loaderStateSelector)

  return (
    <div className={styles['loader-wrapper']}>
      {children}
      <div
        className={classNames(
          styles['loader-backdrop'],
          loading ? styles.loading : ''
        )}
      >
        <LoadingSpinner width={60} height={60} />
      </div>
    </div>
  )
}
