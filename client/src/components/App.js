import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Play from './Play';
import Settings from './Settings';
import Rules from './Rules';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Menu} />
          <Route exact path="/Play" component={Play} />
          <Route exact path="/Rules" component={Rules} />
          <Route exact path="/Settings" component={Settings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
