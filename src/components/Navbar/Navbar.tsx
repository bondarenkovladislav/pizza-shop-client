import React from 'react'
import { AppBar, Toolbar, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { CartIconComponent } from '../CartIconComponent/CartIconComponent'
import { CurrencyToggle } from '../CurrencyToggle/CurrencyToggle'

export const Navbar = () => {
  const history = useHistory()
  return (
    <AppBar position="fixed">
      <Toolbar className={styles.toolbar}>
        <div className={styles.menuWrapper}>
          <div className={styles.quickActions}>
            <MenuItem
              classes={{ root: styles.menuItem }}
              onClick={() => history.push('/')}
            >
              MENU
            </MenuItem>
            <MenuItem onClick={() => history.push('/order')}>ORDERS</MenuItem>
          </div>
          <div className={styles.quickActions}>
            <CurrencyToggle />
            <CartIconComponent onClick={() => history.push('/cart')} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}
