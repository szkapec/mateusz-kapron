import React, { useEffect } from 'react';
import Details from './Projects/Details';
import Root from './Root/Root'
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
    ReactGA.initialize('UA-114663663-1');
    ReactGA.pageview('/');
  }, [])
  return (
    <CreateProvider>
      <HashRouter basename='/'>
        
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/project/:id" component={Details} />
          <Route component={Default} />
        </Switch>
      </HashRouter>
    </CreateProvider>
  );
}

export default App;

