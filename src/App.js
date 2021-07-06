import React from 'react'

import './App.css';
import {cacaData} from './cacaData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import ButtonOnePage from './ButtonOnePage';
import ButtonTwoPage from './ButtonTwoPage';
import ButtonThreePage from './ButtonThreePage';
function App() {
  return (
    <Router>

    <div className="App">
    <Header data={cacaData}/>
    <Switch>
      
      <Route path='/round-buton' component={ButtonOnePage}/>
      <Route path='/square-buton' component={ButtonTwoPage}/>
      <Route path='/incolor-buton' component={ButtonThreePage}/>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
