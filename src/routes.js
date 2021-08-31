import React from 'react'

import { Main, NotFound } from '@pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
