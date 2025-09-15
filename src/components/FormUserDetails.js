import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const FormUserDetails = ({
  handleChange,
  nextStep,
  setEmail,
  setFirstName,
  setLastName,
  values,
}) => {
  const nextContinue = e => {
    e.preventDefault();
    nextStep();
  };

  const { email, firstName, lastName } = values;

  return (
    <MuiThemeProvider>
      <>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>

        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange(setFirstName)}
          defaultValue={values.firstName}
          autoFocus={true}
          required={true}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange(setLastName)}
          defaultValue={values.lastName}
          required={true}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange(setEmail)}
          defaultValue={values.email}
          required={true}
          type="email"
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={nextContinue}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
