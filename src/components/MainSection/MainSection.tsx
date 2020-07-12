import React from 'react'
import styles from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.title}>ITALIAN PIZZA</p>
        <p className={styles.subTitle}>BAKED PIZZA TO FIT ANY TASTE</p>
      </div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={
            'https://sergiopizza.ru/upload/iblock/c57/c570cb79c3a689f10e3d19ce2a847515.png'
          }
        />
      </div>
    </div>
  )
}
