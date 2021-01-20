import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
