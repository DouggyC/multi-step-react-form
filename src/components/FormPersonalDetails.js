import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = ({
  nextStep,
  handleChange,
  prevStep,
  setOccupation,
  setCity,
  setBio,
  values,
}) => {
  const nextContinue = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const { occupation, city, bio } = values;

  return (
    <MuiThemeProvider>
      <>
        <h3>{occupation}</h3>
        <h3>{city}</h3>
        <h3>{bio}</h3>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange(setOccupation)}
          defaultValue={values.occupation}
          required={true}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange(setCity)}
          defaultValue={values.city}
          required={true}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange(setBio)}
          defaultValue={values.bio}
          required={true}
          multiline="true"
        />
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
        />
        <RaisedButton
          label="Continue"
          primary={true}
          type="submit"
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

export default FormPersonalDetails;
