import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Left from "../AuthenticationLeft/Left";
import TitleText from "../TitleTextContainer/TitleText";
import Mailimage from "./image/mail.png";
import EmailVerificationform from "../EmailVerificationForm/EmailVerificationform";

const MailVerification = () => {
  return (
    <Container className="mt-5">
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "75vh" }}
      >
        <Col>
          <Left image={Mailimage} height="474px" width="674px" />
        </Col>
        <Col>
          {" "}
          <TitleText
            title1="Verified Your"
            title2="Email Address"
            title3="Enter the code that we have sent to your email address"
          />
          <EmailVerificationform />
        </Col>
      </Row>
    </Container>
  );
};

export default MailVerification;
