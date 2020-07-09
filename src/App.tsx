import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
          <Route path={'/test'}>Test</Route>
      </Switch>
    </Router>
  )
}

export default App
