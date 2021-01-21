import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch,  Route} from 'react-router-dom'
import Home from './pages/Home';
import Temperature from './components/Temperature/Temperature';
import Length from './components/Length/Length';
import Volumn from './components/Volumn/Volumn';

 
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/temperature"  component={Temperature} />
          <Route path="/length"  component={Length} />
          <Route path="/volumn" component={Volumn} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
