import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Provider from './components/Provider';
import Login from './components/Login';
import Providers from './components/Providers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services/:sid/providers/:pid" component={Provider} />
            <Route exact path="/services/:sid/providers/" component={Providers} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
