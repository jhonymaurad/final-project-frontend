import React, { useContext } from "react";
import { Card, CardBody, Row } from "reactstrap";
import { Context } from "../Store/Context";

export const AccountDetailsView = () => {
  const { state } = useContext(Context);

  return (
    <div className="account-details">
      <h3>Account Details:</h3>
      <Card>
        <CardBody>
          <Row>
            <h5 style={{ paddingRight: "0.3rem" }}>First Name: </h5>
            {state.userData.fName.toUpperCase()}
          </Row>
          <Row>
            <h5 style={{ paddingRight: "0.3rem" }}>Last Name: </h5>
            {state.userData.lName.toUpperCase()}
          </Row>
          <Row>
            <h5 style={{ paddingRight: "0.3rem" }}>Email: </h5>
            {state.userData.email.toUpperCase()}
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};
