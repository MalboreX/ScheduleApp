import React from 'react';


import Schedule from './components/Schedule'
import AdminDashboard from './components/admin/AdminDashboard'

import {
  Route,
  Switch
} from "react-router-dom"

class App extends React.Component {
  render() {
    const { history } = this.props
    return (
      <div>
          <Switch>
            <Route history={history} path='/home' component={Schedule} />
            <Route history={history} path='/admin/:page' component={AdminDashboard} />
            <Route history={history} path='/admin' component={AdminDashboard} />
            <Route history={history} path='/' component={Schedule} />
          </Switch>
      </div>
    );
  }
}

export default App;
