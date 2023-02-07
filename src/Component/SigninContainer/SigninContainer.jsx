import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Left from "../AuthenticationLeft/Left";
import TitleText from "../TitleTextContainer/TitleText";
import DollarImage from "../../Images/dollarImage.png";
import SigninForm from "../SigninForm/SigninForm";

const SigninContainer = () => {
  return (
    <Container className="mt-5">
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "75vh" }}
      >
        <Col>
          <Left image={DollarImage} />
        </Col>
        <Col>
          {" "}
          <TitleText
            title1="Don't be Late"
            title2="Sign in"
            title3="SEND, RECEIVE AND SECURELY STORE YOUR COINS IN YOUR WALLET"
          />
          <SigninForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SigninContainer;
