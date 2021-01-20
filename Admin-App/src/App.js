import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Layout from './components/Layout/index';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
