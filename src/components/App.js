import React from 'react';

import Details from './Projects/Details';
import Home from './Root/Home'
import CreateProvider from './Context/Context';
import Nav from './Nav/Nav';
import Default from './Default/Default';
import {
  Route,
  Switch,
  BrowserRouter,
  HashRouter,
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {

  
 

  return (
    <CreateProvider>
        <Router basename={process.env.PUBLIC_URL} >
            <Nav/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project/:id"  component={Details} />
              <Route component={Default} />
            </Switch>
        </Router>
    </CreateProvider>
  );
}

export default App;

