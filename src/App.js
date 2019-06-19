
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "reactstrap";
import './App.css';

import CarouselPet from './components/CarouselPet';
import About from './components/about';
import NavigationBar from "./components/NavigationBar";
import contact from './pages/contact';
import home from './pages/home';
import { Account } from "./pages/Account";
import { UserDashboard } from "./pages/UserDashboard";


function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/" component={CarouselPet} />
              <Route exact path="/about" component={About} />
              <Route path="/contact" component={contact} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/account/dashboard" component={UserDashboard} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
