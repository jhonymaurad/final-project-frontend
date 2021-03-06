import React from "react";
import { Container } from "reactstrap";
import "../css/about.css";
import Logo from "../assets/logo.png";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import { Statistic, Row, Col, Icon } from 'antd';

export default () => (
  <Container>
    <div className="welcome-container">
      <img src={Logo} alt="logo" />
      <h1 className="title">About us</h1>
      <h2 className="second-line">
        We're Pet Lovers Trying to Make a Difference
      </h2>
      <img className="aboutImg" src={about1} alt="logo" />
      <p className="welcome-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img className="aboutImg" src={about2} alt="logo" />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Pets with a new home" value={1128} prefix={<Icon type="like" />} />
        </Col>
        <Col span={12}>
          <Statistic title="Pets in need of a home" value={93} prefix={<Icon type="frown" />}/>
        </Col>
      </Row>
    </div>
  </Container>
);
