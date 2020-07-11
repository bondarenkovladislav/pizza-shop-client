import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Navbar = () => {
  const history = useHistory()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button onClick={() => history.push('/')}>Home</Button>
        <Button onClick={() => history.push('/cart')}>Cart</Button>
        <Button onClick={() => history.push('/order')}>Order</Button>
      </Toolbar>
    </AppBar>
  )
}
