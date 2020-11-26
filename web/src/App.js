import React from 'react';

<<<<<<< HEAD
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

=======
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//123
function App() {
>>>>>>> c3af8dd4b98cf42ab9d67558ddb261cc305faca2
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
