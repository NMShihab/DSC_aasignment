import React from "react";
import CusttomInput from "../CustomInput/CusttomInput";
import { Row, Col, Form } from "react-bootstrap";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomButton from "../Button/CustomButton";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const option1 = ["one", "two", "three"];
  return (
    <Form>
      <Row>
        <Col>
          <CusttomInput type="text" placeholder="First Name" />
        </Col>
        <Col>
          <CusttomInput type="text" placeholder="Last Name" />
        </Col>
      </Row>

      <CusttomInput type="email" placeholder="Email Address" />
      <CusttomInput type="text" placeholder="Contact Number" />
      <Row>
        <Col>
          <CustomSelect selectText="Select" options={option1} />
        </Col>
        <Col>
          <CustomSelect selectText="Select Country" options={option1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CusttomInput type="text" placeholder="Sum Amount" />
        </Col>
        <Col>
          <CusttomInput type="text" placeholder="Frequent Deposit" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomSelect selectText="Select Cover Duration" options={option1} />
        </Col>
        <Col></Col>
      </Row>
      <CusttomInput type="text" placeholder="Type Password" />
      <CusttomInput type="text" placeholder="Re-Type Password" />
      <Row className="justify-content-center align-items-center">
        <Col
          style={{
            fontWeight: "400",
            fontSize: "15px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
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

export default SignupForm;
