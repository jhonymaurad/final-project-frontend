import React, { Fragment } from "react";
import {
  Form,
  FormGroup,
  Label,
  Card,
  CardText,
  CardBody,
  Jumbotron,
  Container,
  Row
} from "reactstrap";
import "../css/UserDashboard.css";

export const UserDashboard = () => {
  return (
    <Fragment>
      <Jumbotron fluid id="dashboard-jumbotron-container">
        <div className="overlay" />
      </Jumbotron>
      <div className="user-dashboard-container">
        <Container>
          <h1 style={{ marginTop: "1rem" }}>WELCOME USER</h1>
          <div className="account-details">
            <h3>Account Details:</h3>
            <Card>
              <CardBody>
                <CardText>
                  <Row>
                    <h5 style={{ paddingRight: "0.3rem" }}>First Name: </h5>
                    John
                  </Row>
                  <Row>
                    <h5 style={{ paddingRight: "0.3rem" }}>Last Name: </h5>
                    Doe
                  </Row>
                  <Row>
                    <h5 style={{ paddingRight: "0.3rem" }}>Email: </h5>
                    john.doe@gmail.com
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
