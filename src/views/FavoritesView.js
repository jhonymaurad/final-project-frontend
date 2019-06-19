import React from "react";
import { Card, CardBody, Row } from "reactstrap";

export const FavoritesView = () => {
  return (
    <div className="user-favorites">
      <h3>Favorites:</h3>
      <Card>
        <CardBody>
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
        </CardBody>
      </Card>
    </div>
  );
};