import React from 'react'
import styles from './HomePage.module.scss'
import { Button } from '@material-ui/core'
import {ApiService} from "../../classes/services/ApiService";

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <Button onClick={async () => console.log(await ApiService.fetchStock())}>
        Hello
      </Button>
    </div>
  )
}
