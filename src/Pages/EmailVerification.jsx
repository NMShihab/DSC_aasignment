import React from "react";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import MailVerification from "../Component/MailVerification/MailVerification";
const EmailVerification = () => {
  return (
    <AuthenticationLayout>
      <MailVerification />
    </AuthenticationLayout>
  );
};

export default EmailVerification;
