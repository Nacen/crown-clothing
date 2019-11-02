import React, { Component } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email address"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit' value='Submit Form'>
            SIGN IN
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
