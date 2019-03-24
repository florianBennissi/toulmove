import React, { Component } from "react";
import Carrousel from "./Carrousel";
import SignInForm from "./SignInForm";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="signin_container">
          {" "}
          <SignInForm />
          <Carrousel />
        </div>
      </div>
    );
  }
}
