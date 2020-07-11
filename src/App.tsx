import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CartPage } from './pages/CartPage/CartPage'
import { OrderPage } from './pages/OrderPage/OrderPage'
import { Navbar } from './components/Navbar/Navbar'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { Loader } from './components/Loader/Loader'
import { PageWrapper } from './components/PageWrapper/PageWrapper'
import { dispatch } from './store/store'

const App = () => {
  useEffect(() => {
    dispatch.ingredients.loadIngredients()
  }, [])
  return (
    <Router>
      <Navbar />
      <Loader>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/order" component={OrderPage} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </PageWrapper>
      </Loader>
    </Router>
  )
}

export default App
