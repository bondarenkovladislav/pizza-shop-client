import React from 'react'
import styles from './PageWrapper.module.scss'

interface IProps {
  children: JSX.Element
}

export const PageWrapper = ({ children }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>{children} </div>
    </div>
  )
}
