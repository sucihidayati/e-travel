import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { NavbarComponent } from './components'
import { Home, Akomodasi } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/akomodasi" component={Akomodasi} exact />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
