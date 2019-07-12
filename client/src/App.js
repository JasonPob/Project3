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
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/customer" component={CustomerView} />
          <Route exact path="/vendor" component={VendorView} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      {/* <Footer />   */}
      </div>
    </Router>
  );
}

export default App;
