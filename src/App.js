import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch,  Route} from 'react-router-dom'
import Home from './pages/Home';
import Temperature from './components/Temperature/Temperature';

 
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/temperature" exact component={Temperature} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
