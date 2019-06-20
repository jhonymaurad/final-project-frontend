import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText } from "reactstrap";

export const SubmittedFormsViews = () => {
  const submissionCard = () => {
    return (
      <Card
        style={{
          background: "none",
          border: "none",
          padding: "1rem",
          minWidth: "5rem",
          maxWidth: "15rem",
          minHeight: "5rem",
          maxHeight: "15rem",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CardBody>
          <CardText>fefenjfnkejnf</CardText>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="user-submitted-forms">
      <h3>Submitted Forms:</h3>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {submissionCard()}
        </div>
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
