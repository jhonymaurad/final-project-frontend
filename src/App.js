import React,{Fragment} from 'react';
import './App.css';

import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import contact from './pages/contact';
import about from './pages/about';
import home from './pages/home';


function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/"  />
              <Route exact path="/about" />
              <Route path="/contact" component={contact} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
