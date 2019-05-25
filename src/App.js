import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Search} exact />
            <Route path='/results' component={Results} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;