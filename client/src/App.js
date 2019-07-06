// Import React and React Router stuff...
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import pages
import Landing from './pages/Landing';
import CustomerView from './pages/CustomerView';
import VendorView from './pages/VendorView';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/customer" component={CustomerView} />
          <Route exact path="/vendor" component={VendorView} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
