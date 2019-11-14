import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, SignInButtonsContainer } from "./sign-in.styles";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  clearState = () => this.setState({ email: "", password: "" });

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.clearState();
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email address"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <SignInButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
