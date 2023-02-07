import React from "react";
import Header from "../Component/Header/Header";

// Layout for Authentication related pages
const AuthenticationLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default AuthenticationLayout;
