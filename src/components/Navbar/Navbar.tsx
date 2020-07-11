import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { CartIconComponent } from '../CartIconComponent/CartIconComponent'

export const Navbar = () => {
  const history = useHistory()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className={styles.menuWrapper}>
          <div>
            <Button onClick={() => history.push('/')}>Home</Button>
            <Button onClick={() => history.push('/cart')}>Cart</Button>
            <Button onClick={() => history.push('/order')}>Order</Button>
          </div>
          <CartIconComponent />
        </div>
      </Toolbar>
    </AppBar>
  )
}
