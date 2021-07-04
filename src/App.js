import React from 'react'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Sidebar from './Sidebar';
import { routes } from './routes';
import Page from './Page';
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar data={routes} />
        <Switch>
          <Route path="/element/:title">
            <Page data={routes}/>
          </Route>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
