import React from "react";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import SignUpContailer from "../Component/SignupContainer/SignUpContailer";

const Signup = () => {
  return (
    <>
      <AuthenticationLayout>
        <SignUpContailer />
      </AuthenticationLayout>
    </>
  );
};

export default Signup;
