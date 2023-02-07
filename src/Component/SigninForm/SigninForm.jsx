import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import CusttomInput from "../CustomInput/CusttomInput";

const SigninForm = () => {
  return (
    <Form>
      <CusttomInput type="email" placeholder="Email Address" />
      <CusttomInput type="password" placeholder="Password" />

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
        Forget Password?
      </Link>

      <Row className="justify-content-center align-items-center">
        <Col
          style={{
            fontWeight: "400",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/"
            style={{
              fontWeight: "600",
              color: "rgba(5, 62, 255, 1)",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Register
          </Link>
        </Col>
        <Col>
          <CustomButton text="Sign In" />
        </Col>
      </Row>
    </Form>
  );
};

export default SigninForm;
