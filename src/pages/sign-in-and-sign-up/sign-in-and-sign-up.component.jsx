import React from "react";

import { SignInAndSignupContainer } from "./sign-in-and-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";

const SignInAndSignup = () => {
  return (
    <SignInAndSignupContainer>
      <SignIn />
      <Signup />
    </SignInAndSignupContainer>
  );
};

export default SignInAndSignup;
