import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignupContainer, SignupTitle} from './sign-up.styles';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  clearState = () =>
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  handleSubmit = async evt => {
    evt.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.clearState();
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignupContainer>
        <SignupTitle>I don't have an account</SignupTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Signup</CustomButton>
        </form>
      </SignupContainer>
    );
  }
}

export default Signup;
