import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Left from "../AuthenticationLeft/Left";
import SignupForm from "../SignupForm/SignupForm";
import TitleText from "../TitleTextContainer/TitleText";
import DollarImage from "../../Images/dollarImage.png";

const SignUpContailer = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col>
          <Left image={DollarImage} />
        </Col>
        <Col>
          {" "}
          <TitleText
            title1="Sign up to Get The"
            title2="Best Benifit"
            title3="OPEN ACCOUNT FOR FREE AND TRADE 
            BITCOIN AND STOCKS NOW!"
          />
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpContailer;
