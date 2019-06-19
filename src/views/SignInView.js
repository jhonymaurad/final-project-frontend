import React, { Fragment } from "react";
import { CardText, Button, Form, FormGroup, Label, Input } from "reactstrap";

export const SignInView = ({ props }) => {
  return (
    <Fragment>
      <CardText>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2">
              Email
            </Label>
            <Input type="email" name="email" id="signInEmail" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input type="password" name="password" id="signInPassword" />
          </FormGroup>
        </Form>
      </CardText>
      <Button
        color="primary"
        onClick={() => {
          props.history.push("/account/dashboard");
        }}
      >
        Sign In
      </Button>
    </Fragment>
  );
};
