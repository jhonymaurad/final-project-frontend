import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Account } from "./pages/Account";
import { UserDashboard } from "./pages/UserDashboard";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/dashboard" component={UserDashboard} />
        {/* <Route path="/students" component={Students} />
              {state.campusesData.length !== 0 ? (
                <Fragment>
                  <Route path="/campuses/edit-campus" component={EditCampus} />
                  <Route path="/campuses/show-campus" component={ShowCampus} />
                </Fragment>
              ) : (
                <Redirect to="/campuses" />
              )} */}
      </Switch>
    </Router>
  );
}

export default App;
