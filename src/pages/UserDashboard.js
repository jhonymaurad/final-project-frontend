import React, { Fragment, useContext } from "react";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
import "../css/UserDashboard.css";

import { AccountDetailsView } from "../views/AccountDetailsView";
import { FavoritesView } from "../views/FavoritesView";
import { SubmittedFormsViews } from "../views/SubmittedFormsViews";

import { Context } from "../Store/Context";

export const UserDashboard = () => {
  const { dispatch } = useContext(Context);

  return (
    <Fragment>
      <Jumbotron fluid id="dashboard-jumbotron-container">
        <div className="overlay" />
      </Jumbotron>
      <div className="user-dashboard-container">
        <Container>
          <Row style={{ marginTop: "1rem" }}>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h1>WELCOME USER</h1>
            </Col>
            <Col>
              <Button
                color="secondary"
                onClick={() => {
                  dispatch({
                    type: "SIGN_OUT",
                    payload: false
                  });
                }}
              >
                Sign Out
              </Button>
            </Col>
          </Row>
          <AccountDetailsView />
          <br />
          <FavoritesView />
          <br />
          <SubmittedFormsViews />
        </Container>
      </div>
    </Fragment>
  );
};
