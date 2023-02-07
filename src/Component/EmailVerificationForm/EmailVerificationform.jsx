import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import CusttomInput from "../CustomInput/CusttomInput";

const EmailVerificationform = () => {
  return (
    <Form>
      <CusttomInput type="text" placeholder="Enter OTP" />
      <Link
        style={{
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "18px",
          paddingTop: "10px",
          paddingBottom: "10px",
          color: "black",
        }}
      >
        Don't get any OTP? Resent Again
      </Link>

      <Row className="justify-content-center align-items-center">
        <Col
          style={{
            fontWeight: "400",
            fontSize: "15px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/signin"
            style={{
              fontWeight: "600",
              color: "rgba(5, 62, 255, 1)",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Signin
          </Link>
        </Col>
        <Col>
          <CustomButton text="Next" />
        </Col>
      </Row>
    </Form>
  );
};

export default EmailVerificationform;
