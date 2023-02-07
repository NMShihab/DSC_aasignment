import React from "react";
import Header from "../Component/Header/Header";
import { Row, Col, Container } from "react-bootstrap";
import Left from "../Component/AuthenticationLeft/Left";

// Layout for Authentication related pages
const AuthenticationLayout = (props) => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <Left image={props.image} />
          </Col>
          <Col> {props.children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthenticationLayout;
