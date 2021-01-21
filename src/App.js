import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch,  Route} from 'react-router-dom'
import Home from './pages/Home';
import Temperature from './components/Temperature/Temperature';
import Length from './components/Length/Length';

 
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/temperature"  component={Temperature} />
          <Route path="/length"  component={Length} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
