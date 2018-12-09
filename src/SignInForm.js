import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { withSnackbar } from "notistack";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import BaseForm from "./BaseForm";
import { AutoCompleteTextBox, SignaturePadWrapper } from "./CommonComponents";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cubName: "",
      cubSignature: "",
      parentSignature: "",
      nameOptions: [],
      prevPath: ""
    };
    this.validator = this.props.validator(this, "sign-in");
    this.submitter = this.props.submitter;
    this.autocompletion = this.props.autocompletion;
  }

  componentDidMount() {
    const opts = this.autocompletion();
    this.setState({
      nameOptions: opts
    });
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.validator()) {
      const { cubName, cubSignature, parentSignature } = this.state;
      this.submitter(
        {
          cubName: cubName,
          cubSignature: cubSignature,
          parentSignature: parentSignature
        },
        `${cubName} is signed in`,
        `There was a problem signing ${cubName} in`
      );
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <BaseForm
        title="Sign In"
        name={this.props.name}
        email={this.props.email}
        onSubmit={this.onSubmit}
        autoComplete="off"
        noValidate
        auth
      >
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <AutoCompleteTextBox
                id="cubName"
                label="Cub Name"
                onChange={this.handleChange("cubName")}
                fullWidth
                value={this.state.cubName}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={16} justify="center">
              <Grid item xs={6} style={{ padding: 10 }}>
                <SignaturePadWrapper
                  label="Cub Sign In"
                  ref={ref => (this.cubSignaturePad = ref)}
                  contents={this.state.cubSignature}
                />
              </Grid>

              <Grid item xs={6} style={{ padding: 10 }}>
                <SignaturePadWrapper
                  label="Parent Sign In"
                  ref={ref => (this.parentSignaturePad = ref)}
                  contents={this.state.parentSignature}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="submitButton"
                color="primary"
              >
                Submit
                <Icon>send</Icon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </BaseForm>
    );
  }
}

export default SignInForm;
