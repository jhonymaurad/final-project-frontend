import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";

import "../css/SubmittedFormView.css";

import { Context } from "../Store/Context";

export const SubmittedFormsView = () => {
  const { state } = useContext(Context);

  const submittedCard = submission => {
    return (
      <Card>
        <Link to="#" style={{ textDecoration: "inherit", color: "inherit" }}>
          <CardBody>
            <CardTitle>Submitted</CardTitle>
            <CardText style={{ color: "white" }}>
              Name: {submission.name}
            </CardText>
            <CardText style={{ color: "white" }}>
              Age: {submission.age}
            </CardText>
            <CardText style={{ color: "white" }}>
              Species: {submission.category}
            </CardText>
            <CardText style={{ color: "white" }}>
              Desciption: {submission.description}
            </CardText>
          </CardBody>
        </Link>
      </Card>
    );
  };

  const emptyPlaceholder = () => {
    return (
      <Card>
        <CardBody style={{ border: "none" }}>
          <CardTitle>Uh Oh</CardTitle>
          <CardText>You have no submissions</CardText>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="user-submitted-forms">
      <h3>Submitted Forms:</h3>
      <Card>
        <Row className="user-submitted-card">
          {state.submissions.length === 0
            ? emptyPlaceholder()
            : state.submissions
                .reverse()
                .slice(0, 4)
                .map(submission => submittedCard(submission))}
        </Row>
      </Card>
      <Link
        to="#"
        style={{
          float: "right"
        }}
      >
        All Submissions
      </Link>
    </div>
  );
};
