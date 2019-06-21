import React, { useState } from "react";
import { Card, CardText, CardBody, Button, Container } from "reactstrap";
import "../css/Account.css";

import { RegisterView } from "../views/RegisterView";
import { SignInView } from "../views/SignInView";

export const Account = props => {
  const [view, setView] = useState(<RegisterView props={props} />);
  const [createAcctBtn, setCreateAcctBtn] = useState(true);
  const [haveAcctBtn, setHaveAcctBtn] = useState(false);

  return (
    <div className="account-main-container">
      <Container>
        <Card>
          <CardBody>
            {view}
            <CardText />
            <Button
              color="success"
              size="sm"
              disabled={createAcctBtn}
              onClick={() => {
                setCreateAcctBtn(true);
                setHaveAcctBtn(false);
                setView(<RegisterView props={props} />);
              }}
            >
              Create Account
            </Button>{" "}
            <Button
              color="success"
              size="sm"
              disabled
              onClick={() => {
                setHaveAcctBtn(true);
                setCreateAcctBtn(false);
                setView(<SignInView props={props} />);
              }}
            >
              Have Account?
            </Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};
