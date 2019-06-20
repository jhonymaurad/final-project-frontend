
import React, { Fragment, useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';

import CarouselPet from "./components/CarouselPet";
import About from "./components/about";
import { NavigationBar } from "./components/NavigationBar";
import contact from "./pages/contact";
import { Account } from "./pages/Account";
import { UserDashboard } from "./pages/UserDashboard";
import DogsForAdoption from './views/DogsForAdoption';

import { Context } from "./Store/Context";
import RehomePet from "./views/RehomePet";

function App() {
  const { state } = useContext(Context);

  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={CarouselPet} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/adoptDogs" component={DogsForAdoption} /> 
            <Route exact path="/reHome" component={RehomePet} />
            <Route
              exact
              path="/account"
              component={state.isSignedIn ? UserDashboard : Account}
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
