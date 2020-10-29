import React, { useEffect } from 'react';

import Details from './Projects/Details';
import Home from './Root/Home'
import CreateProvider from './Context/Context';
import Nav from './Nav/Nav';
import Default from './Default/Default';
import {
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import ReactGA from 'react-ga';




const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-V7GVDDR3PH');
    console.log(window.location.pathname + window.location.search+"#/")
    ReactGA.pageview(window.location.pathname + window.location.search+"#/");
  }, [])

  return (
    <CreateProvider>
        <HashRouter basename='/'>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project/:id"  component={Details} />
              <Route component={Default} />
            </Switch>
        </HashRouter>
    </CreateProvider>
  );
}

export default App;

