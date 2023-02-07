import React from "react";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import SigninContainer from "../Component/SigninContainer/SigninContainer";

const Signin = () => {
  return (
    <>
      <AuthenticationLayout>
        <SigninContainer />
      </AuthenticationLayout>
    </>
  );
};

export default Signin;
