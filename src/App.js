import React,{Fragment} from 'react';
import './App.css';

import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CarouselPet from './components/CarouselPet';
import About from './components/about';
import NavigationBar from "./components/NavigationBar";
import contact from './pages/contact';
import home from './pages/home';


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
            </Switch>
          </Container>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
