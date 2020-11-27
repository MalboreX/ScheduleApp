import React from 'react';


import Schedule from './components/Schedule'
import Admin from './components/Admin'

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

class App extends React.Component {
  render() {
    const { history } = this.props
  return (
    <div>
        <Switch>
          <Route history={history} path='/home' component={Schedule} />
          <Route history={history} path='/admin' component={Admin} />
          <Route history={history} path='/' component={Schedule} />
        </Switch>
    </div>
  );
  }
  }

export default App;
