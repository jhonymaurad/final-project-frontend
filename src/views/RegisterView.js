import React, { Fragment } from "react";
import { CardText, Button, Form, FormGroup, Label, Input } from "reactstrap";

export const RegisterView = ({ props }) => {
  return (
    <Fragment>
      <CardText>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="fName" className="mr-sm-2">
              First Name
            </Label>
            <Input type="text" name="fname" id="registerFname" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="lName" className="mr-sm-2">
              Last Name
            </Label>
            <Input type="text" name="lname" id="registerLname" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2">
              Email
            </Label>
            <Input type="email" name="email" id="registerEmail" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input type="password" name="password" id="registerPassword" />
          </FormGroup>
        </Form>
      </CardText>
      <Button
        color="primary"
        onClick={() => {
          props.history.push("/account/dashboard");
        }}
      >
        Register
      </Button>
    </Fragment>
  );
};
