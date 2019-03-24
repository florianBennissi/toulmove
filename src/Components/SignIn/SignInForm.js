import React, { Component } from "react";
import { firebase } from "../../firebase";
import FormField from "./../Utilities/FormFields";
import { validate } from "../Utilities/misc";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Entrez votre adresse mail"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Entrez votre mot de passe"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <div className="signinform_wrapper">
        <form onSubmit={event => this.submitForm(event)}>
          <h2 className="signinform_title">
            <div>Partant pour une sortie dans la ville rose ?</div>
            <span>Connectez-vous !</span>
          </h2>
          <div className="formfields">
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
          </div>
          <div className="formfields">
            <FormField
              id={"password"}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
          </div>
          {this.state.formError ? (
            <div className="error_label">Something is wrong, try again.</div>
          ) : null}
          <Link to="/signin">
            <Button
              style={{
                backgroundColor: "#FFB650",
                marginTop: "15px",
                color: "#ffffff"
              }}
              variant="contained"
              to="/"
            >
              Je me connecte !
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignInForm;
